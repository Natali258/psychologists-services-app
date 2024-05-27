import React from 'react'
import { Link } from 'react-router-dom'
import { SHeader, SHeaderBtn, SHeaderBtnRegistration, SHeaderContainer, SHeaderUl, SHeaderUlBtn } from './Header.styled'

export const Header = () => {
  return (
   <SHeader>
     <SHeaderContainer>
        <Link>psychologists.services</Link>
        <SHeaderUl>
            <li>
                <Link>Home</Link>
            </li>
            <li><Link>Psychologists</Link></li>
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
