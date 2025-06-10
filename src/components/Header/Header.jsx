import React from 'react'
import { SCircleContainer, SHeader, SHeaderBoxLink, SHeaderContainer, SHeaderLink, SHeaderLinkNav, SHeaderLinkSpan, SHeaderUl } from './Header.styled'
import { AuthorizationMenu } from '../AuthorizationMenu/AuthorizationMenu'
import { useState } from 'react'


export const Header = () => {
  const[loading, setLoading] = useState(true)



  return (
   <SHeader>
     <SHeaderContainer>
        <SHeaderBoxLink><SHeaderLink to="/">psychologists.<SHeaderLinkSpan>services</SHeaderLinkSpan></SHeaderLink></SHeaderBoxLink>
        <SHeaderUl>
            <SHeaderLinkNav to="/">Home</SHeaderLinkNav>
            <SHeaderLinkNav to="/psychologists">Psychologists</SHeaderLinkNav>
            <SHeaderLinkNav to='/favorites'>Favorites</SHeaderLinkNav>
            <SCircleContainer></SCircleContainer>
        </SHeaderUl>
        <AuthorizationMenu/>
    </SHeaderContainer>
   </SHeader>
  )
}
