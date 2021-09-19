import * as $ from './list-tem-styles'
import { CircleIcon, CloseIcon, SavedIcon, SavingIcon } from './icons'
import { File } from 'resources/types'

type ListItemProps = {
    file: File;
    setFiles: (file: (oldfile: File[]) => File[]) => void
}
function ListItem ({ file, setFiles }:ListItemProps) {
  const Component = {
    editing: <CircleIcon />,
    saving: <SavingIcon />,
    saved: <SavedIcon />,
  }[file.status]

  function handleClick () {
    setFiles(oldFile => (
      oldFile.map(fl => fl.id === file.id ? { ...fl, active: true } : { ...fl, active: false })
    ))
  }

  return (
    <$.Item active={file.active} onClick={() => handleClick()}>
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
