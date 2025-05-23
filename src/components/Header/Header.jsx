import React from 'react'
import { SCircleContainer, SHeader, SHeaderBoxLink, SHeaderContainer, SHeaderLink, SHeaderLinkNav, SHeaderLinkSpan, SHeaderUl } from './Header.styled'
import { AuthorizationMenu } from '../AuthorizationMenu/AuthorizationMenu'


export const Header = () => {


  return (
   <SHeader>
     <SHeaderContainer>
        <SHeaderBoxLink><SHeaderLink to="/">psychologists.<SHeaderLinkSpan>services</SHeaderLinkSpan></SHeaderLink></SHeaderBoxLink>
        <SHeaderUl>
            <li>
                <SHeaderLinkNav to="/">Home</SHeaderLinkNav>
            </li>
            <li><SHeaderLinkNav to="/psychologists">Psychologists</SHeaderLinkNav></li>
            <li><SHeaderLinkNav to='/favorites'>Favorites</SHeaderLinkNav></li>
            <SCircleContainer></SCircleContainer>
        </SHeaderUl>
        <AuthorizationMenu/>
    </SHeaderContainer>
   </SHeader>
  )
}
