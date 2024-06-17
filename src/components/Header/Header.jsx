import React from 'react'
import { SCircleContainer, SHeader, SHeaderBoxLink, SHeaderBtn, SHeaderBtnRegistration, SHeaderContainer, SHeaderLink, SHeaderLinkNav, SHeaderLinkSpan, SHeaderUl, SHeaderUlBtn } from './Header.styled'

export const Header = () => {
  return (
   <SHeader>
     <SHeaderContainer>
        <SHeaderBoxLink><SHeaderLink>psychologists.<SHeaderLinkSpan>services</SHeaderLinkSpan></SHeaderLink></SHeaderBoxLink>
        <SHeaderUl>
            <li>
                <SHeaderLinkNav>Home</SHeaderLinkNav>
            </li>
            <li><SHeaderLinkNav>Psychologists</SHeaderLinkNav></li>
            <SCircleContainer></SCircleContainer>
        </SHeaderUl>
        <SHeaderUlBtn>
            <li>
                <SHeaderBtn>Log In</SHeaderBtn>
            </li>
            <li><SHeaderBtnRegistration>Registration</SHeaderBtnRegistration></li>
        </SHeaderUlBtn>
    </SHeaderContainer>
   </SHeader>
  )
}
