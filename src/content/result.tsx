import * as $ from './result-styles'
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
  result: string;
}
function Result ({ result }:ResultProps) {
  return (
    <$.ResultWrapper dangerouslySetInnerHTML={{ __html: marked(result) }} />
  )
}

export { Result }
