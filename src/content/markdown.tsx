import { useEffect, useState } from 'react'
import { File } from 'resources/types'
import * as $ from './markdown-styles'

type MarkdownProps = {
  files: File[]
  setFiles: (file: (oldfile: File[]) => File[]) => void
}
function Markdown ({ files, setFiles }:MarkdownProps) {
  const [activeFile, setActiveFile] = useState<File>(files[0])

  useEffect(() => {
    setActiveFile(files.filter(fl => fl.active === true)[0])
  }, [files])

  useEffect(() => {
    if (activeFile) {
      setFiles(oldFiles => (
        oldFiles.map(fl => (
          fl.id === activeFile.id ? activeFile : fl
        ))
      ))
    }
  }, [activeFile, setFiles])

  function handleUpdateContent (value: string) {
    setActiveFile(old => ({ ...old, content: value }))
  }

  return (
    <$.MarkdownEditor
      placeholder='Digite aqui seu markdown...'
      value={activeFile?.content}
      onChange={(e) => handleUpdateContent(e.target.value)}
    />
  )
}

export { Markdown }
