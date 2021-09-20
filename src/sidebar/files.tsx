import * as $ from './files-styles'
import { ListItem } from './list-item'
import { File } from 'resources/types'
import { RefObject } from 'react'

type FilesProps = {
  inputRef: RefObject<HTMLInputElement>
  files: File[]
  setFiles: (file: (oldfile: File[]) => File[]) => void
  onCreateFile: () => void
}
function Files ({ inputRef, files, onCreateFile, setFiles }: FilesProps) {
  return (
    <$.FilesWrapper>
      <$.SectionTitle>
        Arquivos
      </$.SectionTitle>
      <$.PrimaryButton onClick={() => onCreateFile()}>
        <$.PlusIcon />
        Adicionar Arquivo
      </$.PrimaryButton>
      <$.FileList>
        {
            files.map(file => (
              <ListItem key={file.id} file={file} inputRef={inputRef} setFiles={setFiles} />
            ))
        }
      </$.FileList>
    </$.FilesWrapper>
  )
}

export { Files }
