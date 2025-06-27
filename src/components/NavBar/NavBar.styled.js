import { NavLink } from "react-router-dom"
import styled from "styled-components"


export const SNavBarBox = styled.div`
display: flex;
position: relative;
margin-left: 130px;
/* justify-content: center;
align-items: center;
gap: 40px;
flex-direction: row; */
`
export const SNavBarUl = styled.ul`
position: relative;
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
flex-direction: row;
`

export const SNavBarLinkNav = styled(NavLink)`
position: relative;
font-weight: 400;
font-size: 16px;
line-height: 125%;
letter-spacing: -0.01em;
color: #191a15;
text-decoration: none;

/* &.active {
  font-weight: bold;
} */
`

export const SCircleContainer = styled.li`
  position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: rgba(84, 190, 150, 1);
  top: 50px;
  left: 15px;
  bottom: 0;
  transition: left 0.3s ease, width 0.3s ease;
  width: ${({ width }) => width || 0}px;
  height: ${({ height }) => height || 0}px;
  left: ${({ left }) => left || 0}px;
  transform: translateX(-50%);
`