import * as $ from './list-tem-styles'
import { CircleIcon, CloseIcon, SavedIcon, SavingIcon } from './icons'
import { File, UpdateFunctionType } from 'resources/types'

type ListItemProps = {
    file: File;
    toggle: boolean
    onUpdateFile: UpdateFunctionType
    onDeleteFile: (id: string) => void
}
function ListItem ({ file, toggle, onDeleteFile, onUpdateFile }:ListItemProps) {
  const Component = {
    editing: <CircleIcon />,
    saving: <SavingIcon />,
    saved: <SavedIcon />,
  }[file.status]

  return (
    <$.Item active={file.active}>
      <$.PersonIcon status={file.status} active={file.active} />
      <$.Link
        active={file.active}
        onClick={() => onUpdateFile(file.id, 'active')}
      >
        {file.name}
      </$.Link>
      <$.Actions>
        {file.active && Component}
        {!file.active && (
          <$.CloseButton onClick={() => onDeleteFile(file.id)} toggle={toggle}>
            <CloseIcon />
          </$.CloseButton>
        )}
      </$.Actions>
    </$.Item>
  )
}

export { ListItem }
