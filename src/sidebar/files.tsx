import * as $ from './files-styles'
import { ListItem } from './list-item'
import { File } from 'resources/types'
import { v4 } from 'uuid'
import { RefObject } from 'react'

type FilesProps = {
  inputRef: RefObject<HTMLInputElement>
  files: File[]
  setFiles: (file: (oldfile: File[]) => File[]) => void
}
function Files ({ inputRef, files, setFiles }: FilesProps) {
  function createNewFile () {
    const newFile:File = {
      id: v4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }

    setFiles(old => old
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat(newFile))
    inputRef.current?.focus()
  }

  return (
    <$.FilesWrapper>
      <$.SectionTitle>
        Arquivos
      </$.SectionTitle>
      <$.PrimaryButton onClick={() => createNewFile()}>
        <$.PlusIcon />
        Adicionar Arquivo
      </$.PrimaryButton>
      <$.FileList>
        {
            files.map(file => (
              <ListItem key={file.id} file={file} setFiles={setFiles} />
            ))
        }
      </$.FileList>
    </$.FilesWrapper>
  )
}

export { Files }
