import * as $ from './list-tem-styles'
import { CircleIcon, CloseIcon, SavedIcon, SavingIcon } from './icons'
import { File } from 'resources/types'

type ListItemProps = {
    file: File;
}
function ListItem ({ file }:ListItemProps) {
  const Component = {
    editing: <CircleIcon />,
    saving: <SavingIcon />,
    saved: <SavedIcon />,
  }[file.status]

  return (
    <$.Item active={file.active}>
      <$.PersonIcon status={file.status} />
      <$.Link active={file.active}>
        {file.name}
      </$.Link>
      <$.Actions>
        {file.active && Component}
        <$.CloseButton>
          <CloseIcon />
        </$.CloseButton>
      </$.Actions>
    </$.Item>
  )
}

export { ListItem }
