import React, { useEffect } from 'react'
import { SHeader, SHeaderBoxLink, SHeaderContainer, SHeaderLink, SHeaderLinkSpan } from './Header.styled'
import { AuthorizationMenu } from '../AuthorizationMenu/AuthorizationMenu'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../services/FirebaseApp'
import { UserMenu } from '../UserMenu/UserMenu'
import { NavBar } from '../NavBar/NavBar'




export const Header = () => {
  const[loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  
  
    useEffect(()=>{
            const unsubscribe  = onAuthStateChanged(auth, (user) => {  
                setLoading(false)  
                if (user) {
                    setLoggedIn(true)
                } else {
                    setLoggedIn(false);
                    
                }
            });
            
            return ()=> unsubscribe ()
        },[]);

  return (
   <SHeader>
     <SHeaderContainer>
        <SHeaderBoxLink><SHeaderLink to="/">psychologists.<SHeaderLinkSpan>services</SHeaderLinkSpan></SHeaderLink></SHeaderBoxLink>
        <NavBar/>
        {loggedIn ? <UserMenu/> : <AuthorizationMenu/> }
    </SHeaderContainer>
   </SHeader>
  )
}
