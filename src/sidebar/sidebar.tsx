import styled, { css } from 'styled-components/macro'
import { Files } from './files'
import { Logo } from './logo'

function Sidebar () {
  return (
    <SidebarWrapper>
      <Logo />
      <Files />
    </SidebarWrapper>
  )
}

export { Sidebar }

const SidebarWrapper = styled.aside`${({ theme }) => css`
  background-color: ${theme.colors.black};
  padding: 45px 32px;
`}`
