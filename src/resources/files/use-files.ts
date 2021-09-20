import { useEffect, useRef, useState } from 'react'
import { File, Status, TypeUpdate } from 'resources/types'
import { v4 } from 'uuid'
import localforage from 'localforage'

export function useFiles () {
  const [files, setFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const timerEditing = useRef(0)
  const timerSaving = useRef(0)
  const timerSaved = useRef(0)

  useEffect(() => {
    const getFiles = async () => {
      const localFiles = await localforage.getItem<File[]>('files') ?? []
      localFiles ? setFiles(localFiles) : createNewFile()
    }
    getFiles()
  }, [])

  const createNewFile = () => {
    setFiles(oldFiles => {
      const newFiles:File[] = [
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
      ]
      localforage.setItem('files', newFiles)
      return newFiles
    })
  }

  const updateFile = (id: string, type: TypeUpdate, status?: Status, title?: string, content?: string) => {
    setFiles(oldFiles => {
      const newFiles = oldFiles.map(file => {
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

      status === 'saved' && localforage.setItem('files', newFiles)
      type === 'active' && localforage.setItem('files', newFiles)
      return newFiles
    })
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
    setFiles(oldFile => {
      const newFiles = oldFile.filter(file => file.id !== id)
      localforage.setItem('files', newFiles)
      return newFiles
    })
  }

  return {
    createNewFile,
    updateFile,
    deleteFile,
    files,
    inputRef,
  }
}
