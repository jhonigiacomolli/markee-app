import { RefObject } from 'react'
import { File } from 'resources/types'
import styled, { css } from 'styled-components/macro'
import { Files } from './files'
import { Logo } from './logo'

type SidebarProps = {
  inputRef: RefObject<HTMLInputElement>;
  files: File[]
  setFiles: (file: (oldfile: File[]) => File[]) => void
  onCreateFile: () => void
}
function Sidebar ({ inputRef, files, onCreateFile, setFiles }:SidebarProps) {
  return (
    <SidebarWrapper>
      <Logo />
      <Files
        inputRef={inputRef}
        files={files}
        setFiles={setFiles}
        onCreateFile={onCreateFile}
      />
    </SidebarWrapper>
  )
}

export { Sidebar }

const SidebarWrapper = styled.aside`${({ theme }) => css`
  background-color: ${theme.colors.black};
  padding: 45px 32px;
`}`
