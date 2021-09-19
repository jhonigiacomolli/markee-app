import { RefObject, useState } from 'react'
import * as $ from './content-styles'
import { Markdown } from './markdown'
import { Result } from './result'
import { Title } from './titlle'

type ContentProps = {
  inputRef: RefObject<HTMLInputElement>
}
function Content ({ inputRef }:ContentProps) {
  const [result, setResult] = useState('')

  return (
    <$.ContentWrapper>
      <Title inputRef={inputRef} />
      <Markdown setResult={setResult} />
      <$.Line />
      <Result result={result} />
    </$.ContentWrapper>
  )
}

export { Content }
