import styled, { css } from 'styled-components/macro'
import { FileIcon } from 'sidebar/icons'

const TitleWrapper = styled.div`
    grid-area: title;
    display: flex;
    align-items: center;
    gap: 1.5rem;
`
const TitleIcon = styled(FileIcon)`${({ theme }) => css`
    stroke: ${theme.colors.primary};
`}`

const Input = styled.input`${({ theme }) => css`
    width: 100%;
    font-family: 'DM Sans' sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.3rem;
    border: none;
    padding: 7px;
    color: ${theme.colors.black} ;
    background-color: ${theme.colors.white};
    :focus-visible {
        outline: none;
    }
`}`

export { TitleWrapper, TitleIcon, Input }
