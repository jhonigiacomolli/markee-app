import styled, { css } from 'styled-components/macro'

const LogoSection = styled.section`
display: flex;
align-items: center;
justify-content: center;
`

const LogoImage = styled.img`
height: 40px;
`

const LogoText = styled.h1`${({ theme }) => css`
font-family: 'DM Sans', sans-serif;
font-size: 3.4rem;
font-weight: 700;
margin: 1.3rem;
color: ${theme.colors.white};
`}`

const LogoSpan = styled.span`${({ theme }) => css`
color: ${theme.colors.primary};
`}`

export { LogoSection, LogoImage, LogoText, LogoSpan }
