import { RefObject } from 'react'
import styled, { css } from 'styled-components/macro'
import { Files } from './files'
import { Logo } from './logo'

type SidebarProps = {
  inputRef: RefObject<HTMLInputElement>;
}
function Sidebar ({ inputRef }:SidebarProps) {
  return (
    <SidebarWrapper>
      <Logo />
      <Files inputRef={inputRef} />
    </SidebarWrapper>
  )
}

export { Sidebar }

const SidebarWrapper = styled.aside`${({ theme }) => css`
  background-color: ${theme.colors.black};
  padding: 45px 32px;
`}`
