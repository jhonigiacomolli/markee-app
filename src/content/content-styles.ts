import styled, { css } from 'styled-components/macro'

const Line = styled.div`${({ theme }) => css`
  grid-area: line;
  width: 2px;
  height: 100%;
  background-color: ${theme.colors.gray};

  @media (max-width: 991px) {
    width:100%;
    height: 2px
  }
`}`

const ContentWrapper = styled.main`${({ theme }) => css`
  display: grid;
  grid-template-columns: 1fr 5px 1fr;
  grid-template-rows: 8rem 1fr;
  grid-template-areas: 
    "title title title"
    "mark line html"
  ;
  gap: 2.5rem;
  padding: 3rem;
  align-items: flex-start;
  background-color: ${theme.colors.white};

  @media (max-width: 991px) {
    width: 100%
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 5px 1fr;
    grid-template-areas: 
      "title"
      "mark"
      "line"
      "html"
    ;
  }
`}`

export { Line, ContentWrapper }
