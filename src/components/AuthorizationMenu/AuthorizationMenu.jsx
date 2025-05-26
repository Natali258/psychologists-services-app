import React from 'react'
import { LoginForm } from '../LoginForm/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { SHeaderBtn, SHeaderBtnRegistration, SHeaderUlBtn } from './AuthorizationMenu.styled';
import { useModal } from '../hooks/useModal';

export const AuthorizationMenu = () => {
  const [isOpenModal, toggleModal] = useModal();


  return (
    <div>
        <SHeaderUlBtn>
                    <li>
                        <SHeaderBtn onClick={toggleModal}>Log In</SHeaderBtn>
                    </li>
                    <li><SHeaderBtnRegistration onClick={toggleModal}>Registration</SHeaderBtnRegistration></li>
        </SHeaderUlBtn>
                <LoginForm open={isOpenModal}
                onClose={toggleModal}/>
                <RegisterForm open={isOpenModal}
                onClose={toggleModal}/>
    </div>
  )
}
