import { Content } from 'content'
import { useRef } from 'react'
import { Sidebar } from 'sidebar'
import styled from 'styled-components/macro'

function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <AppWrapper>
      <Sidebar inputRef={inputRef} />
      <Content inputRef={inputRef} />
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
