import { RefObject } from 'react'
import { File, UpdateFunctionType } from 'resources/types'
import * as $ from './content-styles'
import { Markdown } from './markdown'
import { Result } from './result'
import { Title } from './title'

type ContentProps = {
  inputRef: RefObject<HTMLInputElement>
  file: File
  onUpdateFile: UpdateFunctionType
}
function Content ({ inputRef, file, onUpdateFile }:ContentProps) {
  return (
    file
      ? (
        <$.ContentWrapper>
          <Title
            inputRef={inputRef}
            file={file}
            onUpdateFile={onUpdateFile}
          />
          <Markdown
            file={file}
            onUpdateFile={onUpdateFile}
          />
          <$.Line />
          <Result file={file} />
        </$.ContentWrapper>
        )
      : null
  )
}

export { Content }
