import { useState } from 'react'
import { File, UpdateFunctionType } from 'resources/types'
import styled, { css } from 'styled-components/macro'
import { Files } from './files'
import { Logo } from './logo'
import { MobileMenu } from './mobile-menu'

type SidebarProps = {
  files: File[]
  onCreateFile: () => void
  onUpdateFile: UpdateFunctionType
  onDeleteFile: (id: string) => void
}
function Sidebar ({ files, onCreateFile, onUpdateFile, onDeleteFile }:SidebarProps) {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(old => !old)
  }

  return (
    <SidebarWrapper toggle={toggle}>
      <Logo />
      <MobileMenu handleToggle={handleToggle} toggle={toggle} />
      <Files
        files={files}
        onCreateFile={onCreateFile}
        onUpdateFile={onUpdateFile}
        onDeleteFile={onDeleteFile}
        toggle={toggle}
      />
    </SidebarWrapper>
  )
}

export { Sidebar }

type SidebarWrapperProps = {
  toggle?: boolean
}
const SidebarWrapper = styled.aside<SidebarWrapperProps>`${({ theme, toggle }) => css`
  background-color: ${theme.colors.black};
  padding: 45px 32px;
  
  @media (max-width: 991px) {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto ${toggle ? 'auto' : 0};
    grid-template-areas: 
    "logo mobile"
    "files files"
    ;
    border-bottom: 10px solid ${theme.colors.primary};
    transition: all 0.4s
  }
`}`
