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

export const SHeaderUl = styled.ul`
display: flex;
margin-left: 130px;
justify-content: center;
align-items: center;
gap: 40px;
flex-direction: row;
`

export const SHeaderUlBtn = styled.ul`
display: flex;
margin-left: auto;
justify-content: center;
align-items: center;
gap: 8px;
flex-direction: row;
`

export const SHeaderBtn = styled.button`
display: block;
padding: 14px 39px;
border-radius: 30px;
border: 1px solid rgba(25, 26, 21, 0.2);

font-weight: 500;
font-size: 16px;
line-height: 125%;
letter-spacing: -0.01em;
color: #191a15;
`

export const SHeaderBtnRegistration = styled.button`
display: block;
padding: 14px 39px;
border-radius: 30px;
background-color: #54be96;
border: 1px solid rgba(25, 26, 21, 0.2);

font-weight: 500;
font-size: 16px;
line-height: 125%;
letter-spacing: -0.01em;
color: #fbfbfb;
`