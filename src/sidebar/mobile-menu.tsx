import styled, { css } from 'styled-components/macro'

type MobileMenuProps = {
    toggle: boolean
    handleToggle: () => void
}
function MobileMenu ({ toggle, handleToggle }: MobileMenuProps) {
  return (
    <MenuContainer onClick={handleToggle}>
      <MenuLine position='top' toggle={toggle} />
      <MenuLine position='middle' toggle={toggle} />
      <MenuLine position='bottom' toggle={toggle} />
    </MenuContainer>
  )
}

export { MobileMenu }

const MenuContainer = styled.div`${({ theme }) => css`
    grid-area: mobile;
    padding: 20px 10px;
    cursor: pointer;
    transition: 0.4s ease;
    :hover {
        transform: scaleY(1.1);
    }
    :hover span {
        transition: 0.4s ease;
        background-color: ${theme.colors.primary}
    }
`}`
type MenuLineProps = {
    position: 'top' | 'middle' | 'bottom'
    toggle: boolean
}
const MenuLine = styled.span<MenuLineProps>`${({ theme, position, toggle }) => css`
    display: block;
    width: ${toggle && position === 'middle' ? 0 : '40px'};
    height: 4px;
    margin: 6px 0;
    background-color: ${toggle ? theme.colors.primary : theme.colors.white};
    border-radius: 2px;
    transform: 
        scale(1) 
        ${toggle && position === 'top' ? 'rotate(45deg) translate(7px, 7px)' : ''}
        ${toggle && position === 'bottom' ? 'rotate(-45deg) translate(7px, -7px)' : ''}
    ;
    transition: 0.4s ease;
`}`