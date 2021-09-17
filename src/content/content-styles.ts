import styled, { css } from 'styled-components/macro'

const Line = styled.div`${({ theme }) => css`
grid-area: line;
  width: 2px;
  height: 100%;
  background-color: ${theme.colors.gray};
`}`

const ContentWrapper = styled.main`${({ theme }) => css`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 8rem 1fr;
  grid-template-areas: 
    "title title title"
    "mark line html"
  ;
  gap: 2.5rem;
  padding: 3rem;
  align-items: flex-start;
  background-color: ${theme.colors.white};
`}`

export { Line, ContentWrapper }
