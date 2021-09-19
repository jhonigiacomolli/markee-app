import styled, { css } from 'styled-components/macro'
import { FileIcon } from './icons'

type ItemProps = {
    active?: boolean
    status?: 'editing' | 'saving' | 'saved'
}
const Item = styled.li<ItemProps>`${({ theme, active }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1.5rem;
    padding: 0 1.4rem;
    margin: 10px 0;
    border-radius: 6px;
    background-color: ${active ? theme.colors.lightBlack : 'transparent'};
    cursor: pointer;;
    :hover {
        background-color: ${theme.colors.lightBlack};
        & ${CloseButton} {
            opacity: 1;
            background-color: ${theme.colors.lightBlack};
        }
        & ${Link} {
            opacity: 1;
            color: ${theme.colors.white};
        }
    }
`}`

const PersonIcon = styled(FileIcon)<ItemProps>`${({ theme, status, active }) => css`
    stroke: ${(status === 'editing' || status === 'saving' || active) ? theme.colors.primary : theme.colors.gray};
`}`

const Link = styled.a<ItemProps>`${({ theme, active }) => css`
    font-family: 'DM Sans', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1.4rem 0;
    color: ${active ? theme.colors.white : theme.colors.gray};
    opacity: ${active ? 1 : 0.65};
`}`

const Actions = styled.div``

const CloseButton = styled.button`${({ theme }) => css`
    border: none;
    position: absolute;
    margin: -1rem 0 0 -2.2rem;
    background: transparent;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    padding: 0.9rem;
    color: ${theme.colors.white};
    opacity: 0;
    cursor: pointer;
`}`

export { Item, PersonIcon, Link, Actions, CloseButton }
