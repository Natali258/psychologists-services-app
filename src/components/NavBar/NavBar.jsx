import React, { useEffect, useState } from 'react'
import { SCircleContainer, SNavBarBox, SNavBarLinkNav, SNavBarUl } from './NavBar.styled'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../services/FirebaseApp'

export const NavBar = () => {
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
    <SNavBarBox>
      <SNavBarUl>
            <SNavBarLinkNav to="/" activeClassName="active-link">Home</SNavBarLinkNav>
            <SNavBarLinkNav to="/psychologists" activeClassName="active-link">Psychologists</SNavBarLinkNav>
            {loggedIn ? <SNavBarLinkNav to='/favorites' activeClassName="active-link">Favorites</SNavBarLinkNav> : <></>}
            
            <SCircleContainer></SCircleContainer>
        </SNavBarUl>
    </SNavBarBox>
  )
}
