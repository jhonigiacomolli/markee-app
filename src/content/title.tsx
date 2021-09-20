import { RefObject } from 'react'
import { File, UpdateFunctionType } from 'resources/types'
import * as $ from './title-styles'

type TitleProps = {
  inputRef: RefObject<HTMLInputElement>
  file: File
  onUpdateFile: UpdateFunctionType
}
function Title ({ inputRef, file, onUpdateFile }: TitleProps) {
  function handleUpdateTitle (value: string) {
    onUpdateFile(file.id, 'title', 'editing', value)
  }

  return (
    <$.TitleWrapper>
      <$.TitleIcon />
      <$.Input
        placeholder='Digite aqui o título'
        ref={inputRef}
        value={file?.name}
        onChange={(e) => handleUpdateTitle(e.target.value)}
        autoFocus
      />
    </$.TitleWrapper>
  )
}

export { Title }
