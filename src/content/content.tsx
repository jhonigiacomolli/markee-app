import * as $ from './content-styles'
import { Markdown } from './markdown'
import { Result } from './result'
import { Title } from './titlle'

function Content () {
  return (
    <$.ContentWrapper>
      <Title />
      <Markdown />
      <$.Line />
      <Result />
    </$.ContentWrapper>
  )
}

export { Content }
