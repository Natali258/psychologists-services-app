import React, { useContext, useEffect } from 'react'
import { SCircleContainer, SHeader, SHeaderBoxLink, SHeaderContainer, SHeaderLink, SHeaderLinkNav, SHeaderLinkSpan, SHeaderUl } from './Header.styled'
import { AuthorizationMenu } from '../AuthorizationMenu/AuthorizationMenu'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../services/FirebaseApp'
import { UserMenu } from '../UserMenu/UserMenu'


// const AuthContext = React.createContext();


export const Header = () => {
  const[loading, setLoading] = useState(true)
const [loggedIn, setLoggedIn] = useState(false)
  // const { isLoggedIn } = useContext(AuthContext); 
  // useEffect(() => {
  //   const token = localStorage.getItem('idToken');
  //   console.log(token);
    
  //   if (token) {
  //     setLoggedIn(true);
  //   }
  // }, [])
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
        <SHeaderUl>
            <SHeaderLinkNav to="/">Home</SHeaderLinkNav>
            <SHeaderLinkNav to="/psychologists">Psychologists</SHeaderLinkNav>
            {loggedIn ? <SHeaderLinkNav to='/favorites'>Favorites</SHeaderLinkNav> : <></>}
            
            <SCircleContainer></SCircleContainer>
        </SHeaderUl>
        {loggedIn ? <UserMenu/> : <AuthorizationMenu/>}
        
    </SHeaderContainer>
   </SHeader>
  )
}
