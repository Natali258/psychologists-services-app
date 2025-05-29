import React from 'react'
import { LoginForm } from '../LoginForm/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { SHeaderBtn, SHeaderBtnRegistration, SHeaderUlBtn } from './AuthorizationMenu.styled';
import { useModal } from '../hooks/useModal';

export const AuthorizationMenu = () => {
  const [isOpenModalLog, toggleModalLog] = useModal();
  const [isOpenModalReg, toggleModalReg] = useModal()

  return (
    <div>
        <SHeaderUlBtn>
                    <li>
                        <SHeaderBtn onClick={toggleModalLog}>Log In</SHeaderBtn>
                    </li>
                    <li><SHeaderBtnRegistration onClick={toggleModalReg}>Registration</SHeaderBtnRegistration></li>
        </SHeaderUlBtn>
                <LoginForm open={isOpenModalLog}
                onClose={toggleModalLog}/>
                <RegisterForm open={isOpenModalReg}
                onClose={toggleModalReg}/>
    </div>
  )
}
