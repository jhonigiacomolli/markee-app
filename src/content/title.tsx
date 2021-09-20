import { RefObject, useEffect, useRef, useState } from 'react'
import { File } from 'resources/types'
import * as $ from './title-styles'

type TitleProps = {
  inputRef: RefObject<HTMLInputElement>
  files: File[]
  setFiles: (file: (oldfile: File[]) => File[]) => void
}
function Title ({ inputRef, files, setFiles }: TitleProps) {
  const [activeFile, setActiveFile] = useState<File>(files[0])
  const timerEditing = useRef(0)
  const timerSaving = useRef(0)
  const timerSaved = useRef(0)

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
    clearTimeout(timerEditing.current)
    clearTimeout(timerSaving.current)
    clearTimeout(timerSaved.current)
    activeFile && setActiveFile({ ...activeFile, name: value, status: 'editing' })
    editing()
  }

  const editing = () => {
    timerEditing.current = window.setTimeout(saving, 300)
  }

  const saving = () => {
    timerSaving.current = window.setTimeout(() => {
      activeFile && setActiveFile(old => ({ ...old, status: 'saving' }))
      saved()
    }, 300)
  }

  const saved = () => {
    timerSaved.current = window.setTimeout(() => {
      activeFile && setActiveFile(old => ({ ...old, status: 'saved' }))
    }, 300)
  }

  return (
    <$.TitleWrapper>
      <$.TitleIcon />
      <$.Input
        placeholder='Digite aqui o título'
        ref={inputRef}
        value={activeFile?.name}
        onChange={(e) => handleUpdateTitle(e.target.value)}
        autoFocus
      />
    </$.TitleWrapper>
  )
}

export { Title }
