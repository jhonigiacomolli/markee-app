import * as $ from './result-styles'
import { File } from 'resources/types'
import marked from 'marked'
import 'highlight.js/styles/github.css'

import('highlight.js').then(hljs => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }
      return h.highlightAuto(code).value
    },
  })
})

type ResultProps = {
  file: File;
}
function Result ({ file }:ResultProps) {
  return (
    <$.ResultWrapper dangerouslySetInnerHTML={{ __html: marked(file?.content ?? '') }} />
  )
}

export { Result }
