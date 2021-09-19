import styled, { css } from 'styled-components'

const FilesWrapper = styled.section`
    padding: 60px 0;
`
const FileList = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
`
const SectionTitle = styled.h1`${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'DM Sans', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${theme.colors.white};
    :before, :after {
        display: inline-block;
        position: relative;
        content: '';
        height: 2px;
        margin: 0 5px;
        background-color: ${theme.colors.primary};
    }
    :before {
        width: 3rem;
    }
    :after {
        width: 100%;
    }
`}`

const PrimaryButton = styled.button`${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 3.5rem 0;
    width: 100%;
    height: 3.5rem;
    border: none;
    border-radius: 4px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 1.35rem;
    line-height: 1.75rem;
    cursor: pointer;
    filter: brightness(1);
    transition: 0.4s ease;
    color: ${theme.colors.lightBlack};
    background-color: ${theme.colors.primary};
    :hover {
        background-color: ${theme.colors.primaryDark};
}
`}`

const PlusIcon = styled.span`${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    ::before, ::after {
        display: inline-block;
        position: absolute;
        content: '';
        background-color: ${theme.colors.lightBlack};
    }
    ::before{
        width: 1rem;
        height: 1.7px;
    }
    ::after{
        width: 1.7px;
        height: 1rem;
    }
`}`

export { FilesWrapper, FileList, SectionTitle, PrimaryButton, PlusIcon }
