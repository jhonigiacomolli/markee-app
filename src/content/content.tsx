import { useState } from 'react'
import * as $ from './content-styles'
import { Markdown } from './markdown'
import { Result } from './result'
import { Title } from './titlle'

function Content () {
  const [result, setResult] = useState('')

  return (
    <$.ContentWrapper>
      <Title />
      <Markdown setResult={setResult} />
      <$.Line />
      <Result result={result} />
    </$.ContentWrapper>
  )
}

export { Content }
