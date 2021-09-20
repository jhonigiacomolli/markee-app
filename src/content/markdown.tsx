import { File, UpdateFunctionType } from 'resources/types'
import * as $ from './markdown-styles'

type MarkdownProps = {
  file: File
  onUpdateFile: UpdateFunctionType
}
function Markdown ({ file, onUpdateFile }:MarkdownProps) {
  function handleUpdateContent (value: string) {
    onUpdateFile(file.id, 'content', 'editing', undefined, value)
  }

  return (
    <$.MarkdownEditor
      placeholder='Digite aqui seu markdown...'
      value={file?.content}
      onChange={(e) => handleUpdateContent(e.target.value)}
    />
  )
}

export { Markdown }
