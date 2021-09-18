import * as $ from './files-styles'
import { ListItem } from './list-item'
import { File } from 'resources/types'

function Files () {
  const files:File[] = [
    {
      id: 'file-0',
      name: 'README.md',
      content: '## Bootcamp Brain Co. Lorem ipsum dolor sit amet simet',
      active: false,
      status: 'saving',
    },
    {
      id: 'file-1',
      name: 'CONTRIBUTING.md',
      content: '## Bootcamp Brain Co. Lorem ipsum dolor sit amet simet',
      active: false,
      status: 'saved',
    },
    {
      id: 'file-2',
      name: 'Licence.md',
      content: '## Bootcamp Brain Co. Lorem ipsum dolor sit amet simet',
      active: false,
      status: 'saved',
    },
    {
      id: 'file-3',
      name: 'Links.md',
      content: '## Bootcamp Brain Co. Lorem ipsum dolor sit amet simet',
      active: false,
      status: 'saved',
    },
    {
      id: 'file-4',
      name: 'Roadmap.md',
      content: '## Bootcamp Brain Co. Lorem ipsum dolor sit amet simet',
      active: true,
      status: 'editing',
    },
  ]

  return (
    <$.FilesWrapper>
      <$.SectionTitle>
        Arquivos
      </$.SectionTitle>
      <$.PrimaryButton>
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
