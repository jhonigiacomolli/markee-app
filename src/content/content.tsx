import { RefObject } from 'react'
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
  return (
    <$.ContentWrapper>
      <Title inputRef={inputRef} files={files} setFiles={setFiles} />
      <Markdown files={files} setFiles={setFiles} />
      <$.Line />
      <Result files={files} />
    </$.ContentWrapper>
  )
}

export { Content }
