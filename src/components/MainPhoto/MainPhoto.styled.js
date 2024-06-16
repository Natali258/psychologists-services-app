import styled from "styled-components";

export const SContainer = styled.div`
position: relative;
width: 565px;
`

export const SImageContainer = styled.div`
margin-left: 101px;
`

export const SUserContainer = styled.div`
display: flex;
width: 48px;
height: 48px;
border-radius: 10px;
background-color: rgba(251, 199, 94, 1);
align-items: center;
justify-content:center;
position: absolute;
top: 67px;
right: -43px;
transform: rotate(15deg);
`
export const SQuestionContainer = styled.div`
display: flex;
width: 40px;
height: 40px;
border-radius: 10px;
background-color: rgba(69, 53, 175, 1);
align-items: center;
justify-content:center;
position: absolute;
top: 214px;
left: 67px;
transform: rotate(-15deg);
`

export const SAnaliticContainer = styled.div`
display: flex;
width: 311px;
height: 118px;
border-radius: 20px;
background-color: rgba(84, 190, 150, 1);
align-items: center;
justify-content:center;
gap: 16px;
position: absolute;
top: 362px;
/* left: -101px; */
`

export const SCheakContainer = styled.div`
display: flex;
width: 54px;
height: 54px;
border-radius: 13px;
background-color: rgba(251, 251, 251, 1);
align-items: center;
justify-content:center;
`

export const STextContainer = styled.div`
display: flex;
height: 54px;
gap: 8px;
flex-direction: column;
`
export const SText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
color: rgba(251, 251, 251, 0.5);
`
export const SNumber = styled.p`
font-family: var(--font-family);
font-weight: 700;
font-size: 24px;
color: #fbfbfb;
`