import React from 'react'
import { Link } from 'react-router-dom'
import { SHeaderContainer, SHeaderUl, SHeaderUlBtn } from './Header.styled'

export const Header = () => {
  return (
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
                <button>Log In</button>
            </li>
            <li><button>Registration</button></li>
        </SHeaderUlBtn>
    </SHeaderContainer>
  )
}
