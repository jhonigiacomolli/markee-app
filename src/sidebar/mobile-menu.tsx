import * as $ from './mobile-menu-styles'
type MobileMenuProps = {
    toggle: boolean
    handleToggle: () => void
}
function MobileMenu ({ toggle, handleToggle }: MobileMenuProps) {
  return (
    <$.MenuContainer onClick={handleToggle}>
      <$.MenuLine position='top' toggle={toggle} />
      <$.MenuLine position='middle' toggle={toggle} />
      <$.MenuLine position='bottom' toggle={toggle} />
    </$.MenuContainer>
  )
}

export { MobileMenu }


