import { Content } from 'content'
import { useRef, useState } from 'react'
import { File } from 'resources/types'
import { Sidebar } from 'sidebar'
import { v4 } from 'uuid'
import styled from 'styled-components/macro'

function App () {
  const [files, setFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  function createNewFile () {
    setFiles(oldFiles => ([
      ...oldFiles,
      {
        id: v4(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      },
    ]))
  }
  return (
    <AppWrapper>
      <Sidebar
        inputRef={inputRef}
        files={files}
        setFiles={setFiles}
        onCreateFile={() => createNewFile()}
      />
      <Content
        inputRef={inputRef}
        files={files}
        setFiles={setFiles}
      />
    </AppWrapper>
  )
}

export { App }

const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 332px 1fr;
`
