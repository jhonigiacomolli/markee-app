import * as $ from './list-tem-styles'
import { CircleIcon, CloseIcon, SavedIcon, SavingIcon } from './icons'
import { File } from 'resources/types'
import { RefObject } from 'react'

type ListItemProps = {
    inputRef: RefObject<HTMLInputElement>
    file: File;
    setFiles: (file: (oldfile: File[]) => File[]) => void
    onDeleteFile: (id: string) => void
}
function ListItem ({ inputRef, file, onDeleteFile, setFiles }:ListItemProps) {
  const Component = {
    editing: <CircleIcon />,
    saving: <SavingIcon />,
    saved: <SavedIcon />,
  }[file.status]

  function handleClick () {
    setFiles(oldFile => (
      oldFile.map(fl => fl.id === file.id ? { ...fl, active: true } : { ...fl, active: false })
    ))
    inputRef.current?.focus()
  }

  return (
    <$.Item active={file.active}>
      <$.PersonIcon status={file.status} active={file.active} />
      <$.Link active={file.active} onClick={() => handleClick()}>
        {file.name}
      </$.Link>
      <$.Actions>
        {file.active && Component}
        {!file.active && (
          <$.CloseButton onClick={() => onDeleteFile(file.id)}>
            <CloseIcon />
          </$.CloseButton>
        )}
      </$.Actions>
    </$.Item>
  )
}

export { ListItem }
