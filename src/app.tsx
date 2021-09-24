import { Content } from 'content'
import { useFiles } from 'resources/files/use-files'
import { Sidebar } from 'sidebar'
import styled from 'styled-components/macro'

function App () {
  const {
    files,
    inputRef,
    createNewFile,
    updateFile,
    deleteFile,
  } = useFiles()

  return (
    <AppWrapper>
      <Sidebar
        files={files}
        onCreateFile={createNewFile}
        onUpdateFile={updateFile}
        onDeleteFile={deleteFile}
      />
      <Content
        inputRef={inputRef}
        file={files.filter(file => file.active)[0]}
        onUpdateFile={updateFile}
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

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr
  }
`
