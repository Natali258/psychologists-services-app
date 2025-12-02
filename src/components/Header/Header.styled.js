import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const SHeader = styled.div`
display: block;
width: 100%;
padding: 24px 0 24px 0;
border-bottom: 1px solid rgba(25, 26, 21, 0.1);;
`

export const SHeaderContainer = styled.div`
display:flex;
flex-direction: row;
`


export const SHeaderBoxLink = styled.div`
display: flex;
align-items: center;
`

export const SHeaderLink = styled(NavLink)`
font-family: var(--font-family);
font-weight: 700;
font-size: 20px;
line-height: 120%;
letter-spacing: -0.02em;
color: #54be96;
text-decoration: none;
`

export const SHeaderLinkSpan = styled.span`
font-weight: 600;
color: #191a15;
`

