import * as $ from './files-styles'
import { ListItem } from './list-item'
import { File } from 'resources/types'
import { v4 } from 'uuid'
import { useState } from 'react'

function Files () {
  const [files, setFiles] = useState<File[]>([])

  function createNewFile () {
    const newFile:File = {
      id: v4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }

    const oldFiles = files.map(item => {
      return {
        ...item,
        active: false,
      }
    })

    setFiles([...oldFiles, newFile])
  }
  console.log(files)

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
              <ListItem key={file.id} file={file} />
            ))
        }
      </$.FileList>
    </$.FilesWrapper>
  )
}

export { Files }
