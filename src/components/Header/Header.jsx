import React from 'react'
import { SCircleContainer, SHeader, SHeaderBoxLink, SHeaderBtn, SHeaderBtnRegistration, SHeaderContainer, SHeaderLink, SHeaderLinkNav, SHeaderLinkSpan, SHeaderUl, SHeaderUlBtn } from './Header.styled'
import { LoginForm } from '../LoginForm/LoginForm';

export const Header = () => {
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                <SHeaderBtn onClick={handleOpen}>Log In</SHeaderBtn>
            </li>
            <li><SHeaderBtnRegistration>Registration</SHeaderBtnRegistration></li>
        </SHeaderUlBtn>
        <LoginForm open={open}
        onClose={handleClose}/>
    </SHeaderContainer>
   </SHeader>
  )
}
