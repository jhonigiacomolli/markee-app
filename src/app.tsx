import { Content } from 'content'
import { useRef, useState } from 'react'
import { File, Status, TypeUpdate } from 'resources/types'
import { Sidebar } from 'sidebar'
import { v4 } from 'uuid'
import styled from 'styled-components/macro'

function App () {
  const [files, setFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const timerEditing = useRef(0)
  const timerSaving = useRef(0)
  const timerSaved = useRef(0)

  const createNewFile = () => {
    setFiles(oldFiles => ([
      ...oldFiles.map(file => ({
        ...file,
        active: false,
      })),
      {
        id: v4(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      },
    ]))
  }

  const updateFile = (id: string, type: TypeUpdate, status?: Status, title?: string, content?: string) => {
    setFiles(oldFiles => (
      oldFiles.map(file => {
        if (type === 'active') {
          return (
            {
              ...file,
              active: file.id === id,
            }
          )
        }
        if (type === 'status') {
          return file.id === id
            ? ({
                ...file,
                status: status ?? file.status,
              })
            : file
        } else {
          return file.id === id
            ? ({
                ...file,
                status: status ?? file.status,
                name: title ?? file.name,
                content: content ?? file.content,
              })
            : file
        }
      })
    ))
    status === 'editing' && editing(id)
  }

  const editing = (id: string) => {
    clearTimeout(timerEditing.current)
    clearTimeout(timerSaving.current)
    clearTimeout(timerSaved.current)
    timerEditing.current = window.setTimeout(() => saving(id), 300)
  }

  const saving = (id: string) => {
    timerSaving.current = window.setTimeout(() => {
      updateFile(id, 'status', 'saving')
      saved(id)
    }, 300)
  }

  const saved = (id: string) => {
    timerSaved.current = window.setTimeout(() => {
      updateFile(id, 'status', 'saved')
    }, 300)
  }

  const deleteFile = (id: string) => {
    setFiles(oldFile => (
      oldFile.filter(file => file.id !== id)
    ))
  }

  return (
    <AppWrapper>
      <Sidebar
        files={files}
        onCreateFile={createNewFile}
        onUpdateFile={updateFile}
        onDeleteFile={deleteFile}
      />
      <Content
        inputRef={inputRef}
        file={files.filter(file => file.active)[0]}
        onUpdateFile={updateFile}
      />
    </AppWrapper>
  )
}

export { App }

const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 332px 1fr;
`
