import * as $ from './title-styles'

function Title () {
  return (
    <$.TitleWrapper>
      <$.TitleIcon />
      <$.Input value='Sem título' />
    </$.TitleWrapper>
  )
}

export { Title }
