import { RefObject, useEffect, useState } from 'react'
import { File } from 'resources/types'
import * as $ from './title-styles'

type TitleProps = {
  inputRef: RefObject<HTMLInputElement>
  files: File[]
  setFiles: (file: (oldfile: File[]) => File[]) => void
}
function Title ({ inputRef, files, setFiles }: TitleProps) {
  const [activeFile, setActiveFile] = useState<File>()

  useEffect(() => {
    setActiveFile(files.filter(item => item.active === true)[0])
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

  function handleUpdateTitle (value: string) {
    activeFile && setActiveFile({ ...activeFile, name: value })
  }

  return (
    <$.TitleWrapper>
      <$.TitleIcon />
      <$.Input
        placeholder='Digite aqui o título'
        ref={inputRef}
        value={activeFile?.name}
        onChange={(e) => handleUpdateTitle(e.target.value)}
      />
    </$.TitleWrapper>
  )
}

export { Title }
