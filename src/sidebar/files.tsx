import * as $ from './files-styles'
import { ListItem } from './list-item'
import { File, UpdateFunctionType } from 'resources/types'

type FilesProps = {
  files: File[]
  toggle: boolean
  onCreateFile: () => void
  onUpdateFile: UpdateFunctionType
  onDeleteFile: (id: string) => void
}
function Files ({ files, toggle, onCreateFile, onUpdateFile, onDeleteFile }: FilesProps) {
  return (
    <$.FilesWrapper toggle={toggle}>
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
                toggle={toggle}
              />
            ))
        }
      </$.FileList>
    </$.FilesWrapper>
  )
}

export { Files }
