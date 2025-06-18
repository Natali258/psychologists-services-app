import { NavLink } from "react-router-dom"
import styled from "styled-components"


export const SNavBarBox = styled.div`
display: flex;
position: relative;
margin-left: 130px;
justify-content: center;
align-items: center;
gap: 40px;
flex-direction: row;
`
export const SNavBarUl = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
flex-direction: row;
`

export const SNavBarLinkNav = styled(NavLink)`
font-weight: 400;
font-size: 16px;
line-height: 125%;
letter-spacing: -0.01em;
color: #191a15;
text-decoration: none;
`

export const SCircleContainer = styled.li`
&:before {
  content: "";
  position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: rgba(84, 190, 150, 1);
  top: 50px;
  left: 15px;
  transition: all 1s;
}
`