import styled, { css } from 'styled-components'

const MarkdownEditor = styled.textarea`${({ theme }) => css`
    grid-area: mark;
    height: 100%;
    border: none;
    font-family: 'Inconsolate', monospace;
    font-size: 1.8rem;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    :focus-visible {
        outline: none;
    }
`}`

export { MarkdownEditor }
