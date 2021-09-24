import styled, { css } from 'styled-components'

const MarkdownEditor = styled.textarea`${({ theme }) => css`
    grid-area: mark;
    width: 100%;
    height: 100%;
    border: none;
    font-family: 'Inconsolate', monospace;
    font-size: 1.7rem;
    line-height: 2.7rem;
    resize: none;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    :focus-visible {
        outline: none;
    }
`}`

export { MarkdownEditor }
