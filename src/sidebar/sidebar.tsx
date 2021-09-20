import { File, UpdateFunctionType } from 'resources/types'
import styled, { css } from 'styled-components/macro'
import { Files } from './files'
import { Logo } from './logo'

type SidebarProps = {
  files: File[]
  onCreateFile: () => void
  onUpdateFile: UpdateFunctionType
  onDeleteFile: (id: string) => void
}
function Sidebar ({ files, onCreateFile, onUpdateFile, onDeleteFile }:SidebarProps) {
  return (
    <SidebarWrapper>
      <Logo />
      <Files
        files={files}
        onCreateFile={onCreateFile}
        onUpdateFile={onUpdateFile}
        onDeleteFile={onDeleteFile}
      />
    </SidebarWrapper>
  )
}

export { Sidebar }

const SidebarWrapper = styled.aside`${({ theme }) => css`
  background-color: ${theme.colors.black};
  padding: 45px 32px;
`}`
