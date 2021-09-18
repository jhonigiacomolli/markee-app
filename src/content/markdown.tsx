import { Dispatch } from 'react'
import * as $ from './markdown-styles'

type MarkdownProps = {
  setResult: Dispatch<string>
}
function Markdown ({ setResult }:MarkdownProps) {
  return (
    <$.MarkdownEditor
      placeholder='Digite aqui seu Markdown...'
      onChange={(e) => setResult(e.target.value)}
    />
  )
}

export { Markdown }
