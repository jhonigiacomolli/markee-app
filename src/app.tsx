import { Content } from 'content'
import { Sidebar } from 'sidebar'
import styled from 'styled-components/macro'

function App () {
  return (
    <AppWrapper>
      <Sidebar />
      <Content />
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
