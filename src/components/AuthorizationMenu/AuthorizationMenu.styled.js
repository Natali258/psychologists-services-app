import styled from 'styled-components'

export const SAuthContainer = styled.div`
display: flex;
margin-left: auto;
justify-content: center;
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
background-color: rgba(251, 251, 251, 1);
transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

font-weight: 500;
font-size: 16px;
line-height: 125%;
letter-spacing: -0.01em;
color: #191a15;

&:hover {
    border: 1px solid #36a379;
}
`

export const SHeaderBtnRegistration = styled.button`
display: block;
padding: 14px 39px;
border-radius: 30px;
background-color: #54be96;
border: 1px solid rgba(25, 26, 21, 0.2);
transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

font-weight: 500;
font-size: 16px;
line-height: 125%;
letter-spacing: -0.01em;
color: #fbfbfb;

&:hover {
    background-color: #36a379;
}
`