import * as $ from './title-styles'

function Title () {
  return (
    <$.TitleWrapper>
      <$.TitleIcon />
      <$.Input value='Roadmap.md' />
    </$.TitleWrapper>
  )
}

export { Title }
