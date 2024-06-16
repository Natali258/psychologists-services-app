import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const SHomeContainer = styled.div`
display: block;
padding: 49px 0 129px 0;
`

export const SContentContainer = styled.div`
display: flex;
flex-direction: row;
gap: 24px;

`

export const SButton = styled(NavLink)`
/* display: flex;
flex-direction: row;
align-items: center;
gap: 17px; */
display: block;
border-radius: 30px;
padding: 18px 50px;
width: 235px;
height: 60px;
background: #3470ff; 
text-decoration: none;
`

export const SButtonText = styled.p`
display: inline;
font-weight: 500;
font-size: 20px;
line-height: 120%;
letter-spacing: -0.01em;
color: #fbfbfb;
`

export const SButtonIcon = styled.div`
display: inline-block;
margin-left: 17px;
width: 18px;
`

