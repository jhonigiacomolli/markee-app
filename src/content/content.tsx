import { RefObject, useState } from 'react'
import { File } from 'resources/types'
import * as $ from './content-styles'
import { Markdown } from './markdown'
import { Result } from './result'
import { Title } from './title'

type ContentProps = {
  inputRef: RefObject<HTMLInputElement>
  files: File[]
  setFiles: (file: (oldfile: File[]) => File[]) => void
}
function Content ({ inputRef, files, setFiles }:ContentProps) {
  const [result, setResult] = useState('')

  return (
    <$.ContentWrapper>
      <Title inputRef={inputRef} files={files} setFiles={setFiles} />
      <Markdown setResult={setResult} />
      <$.Line />
      <Result result={result} />
    </$.ContentWrapper>
  )
}

export { Content }
