import * as $ from './logo-styles'

function Logo () {
  return (
    <$.LogoSection>
      <$.LogoImage src='/logo192.png' />
      <$.LogoText>
        markee
        <$.LogoSpan>.</$.LogoSpan>
      </$.LogoText>
    </$.LogoSection>
  )
}

export { Logo }
