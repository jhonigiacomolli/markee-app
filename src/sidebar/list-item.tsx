import * as $ from './list-tem-styles'
import { CircleIcon, CloseIcon, SavedIcon, SavingIcon } from './icons'

type File ={
    id: string
    name: string
    content: string
    active: boolean
    status: 'editing' | 'saving' | 'saved'
}
type ListItemProps = {
    file: File;
}
function ListItem ({ file }:ListItemProps) {
  return (
    <$.Item active={file.active}>
      <$.PersonIcon status={file.status} />
      <$.Link active={file.active}>
        {file.name}
      </$.Link>
      <$.Actions>
        {(file.status === 'editing' && file.active) && <CircleIcon />}
        {(file.status === 'saving' && file.active) && <SavingIcon />}
        {(file.status === 'saved' && file.active) && <SavedIcon />}
        <$.CloseButton>
          <CloseIcon />
        </$.CloseButton>
      </$.Actions>
    </$.Item>
  )
}

export { ListItem }
