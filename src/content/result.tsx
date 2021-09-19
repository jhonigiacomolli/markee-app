import * as $ from './result-styles'
import marked from 'marked'
import 'highlight.js/styles/github.css'
import { useEffect, useState } from 'react'
import { File } from 'resources/types'

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
  files: File[];
}
function Result ({ files }:ResultProps) {
  const [content, setContet] = useState('')

  useEffect(() => {
    setContet(files.filter(file => file.active === true)[0]?.content ?? '')
  }, [files])

  return (
    <$.ResultWrapper dangerouslySetInnerHTML={{ __html: marked(content) }} />
  )
}

export { Result }
