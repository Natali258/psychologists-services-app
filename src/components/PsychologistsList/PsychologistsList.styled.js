import styled from "styled-components";

export const ListContainer = styled.div`
margin-top: 32px;
`

export const ListUl = styled.ul`
display: flex;
flex-direction: column;
gap: 32px
`
export const ListBtn = styled.button`
display: block;
margin: 64px auto;
border-radius: 30px;
padding: 14px 48px;
width: 176px;
height: 48px;
background: #54be96;
border: none;
transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

font-weight: 500;
font-size: 16px;
line-height: 125%;
letter-spacing: -0.01em;
color: #fbfbfb;

&:hover {
    background: #36a379;
}
`