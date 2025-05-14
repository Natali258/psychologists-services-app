import React from 'react'
import { SCircleContainer, SHeader, SHeaderBoxLink, SHeaderBtn, SHeaderBtnRegistration, SHeaderContainer, SHeaderLink, SHeaderLinkNav, SHeaderLinkSpan, SHeaderUl, SHeaderUlBtn } from './Header.styled'
import { LoginForm } from '../LoginForm/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';

export const Header = () => {
    const [openLog, setOpenLog] = React.useState(false);
    const handleOpenLog = () => setOpenLog(true);
    const handleCloseLog = () => setOpenLog(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

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
        <div>
            <div>Avatar</div>
            <div>Name</div>
            <button>Log out</button>
        </div>
        <SHeaderUlBtn>
            <li>
                <SHeaderBtn onClick={handleOpenLog}>Log In</SHeaderBtn>
            </li>
            <li><SHeaderBtnRegistration onClick={handleOpen}>Registration</SHeaderBtnRegistration></li>
        </SHeaderUlBtn>
        <LoginForm open={openLog}
        onClose={handleCloseLog}/>
        <RegisterForm open={open}
        onClose={handleClose}/>
    </SHeaderContainer>
   </SHeader>
  )
}
