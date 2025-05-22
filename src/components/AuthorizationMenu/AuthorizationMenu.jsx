import React from 'react'
import { LoginForm } from '../LoginForm/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { SHeaderBtn, SHeaderBtnRegistration, SHeaderUlBtn } from './AuthorizationMenu.styled';

export const AuthorizationMenu = () => {
    const [openLog, setOpenLog] = React.useState(false);
        const handleOpenLog = () => setOpenLog(true);
        const handleCloseLog = () => setOpenLog(false);
    
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);



  return (
    <div>
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
    </div>
  )
}
