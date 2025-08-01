import styled from "styled-components";

export const SUserContainer = styled.div`
display: flex;
margin-left: auto;
justify-content: center;
`
export const SUserBox = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
justify-content: center;
align-items: center;
`
export const SUserBoxAvatar = styled.div`
border-radius: 10px;
width: 40px;
height: 40px;
background-color: #36a379;
display: flex;
align-items: center;
justify-content: center
`
export const SUserBoxName = styled.div`
font-weight: 500;
font-size: 16px;
line-height: 125%;
letter-spacing: -0.01em;
color: #191a15;
background-color: none;
`
export const SUserBtn = styled.button`
margin-left: 28px;

border: 1px solid rgba(25, 26, 21, 0.2);
border-radius: 30px;
padding: 14px 39px;
width: 135px;
height: 48px;

font-weight: 500;
font-size: 16px;
line-height: 125%;
letter-spacing: -0.01em;
color: #191a15;

&:hover {
    border: 1px solid #36a379;
}
`
