import * as $ from './files-styles'
import { ListItem } from './list-item'
import { File, UpdateFunctionType } from 'resources/types'

type FilesProps = {
  files: File[]
  onCreateFile: () => void
  onUpdateFile: UpdateFunctionType
  onDeleteFile: (id: string) => void
}
function Files ({ files, onCreateFile, onUpdateFile, onDeleteFile }: FilesProps) {
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
              <ListItem
                key={file.id}
                file={file}
                onUpdateFile={onUpdateFile}
                onDeleteFile={onDeleteFile}
              />
            ))
        }
      </$.FileList>
    </$.FilesWrapper>
  )
}

export { Files }
