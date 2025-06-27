import React, { useEffect, useRef, useState } from 'react'
import { SCircleContainer, SNavBarBox, SNavBarLinkNav, SNavBarUl } from './NavBar.styled'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../services/FirebaseApp'
import { useLocation } from 'react-router-dom'

export const NavBar = () => {
  const[loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  const [circleStyle, setCircleStyle] = useState({left: 0,
    width: 0,
    height: 0,});
  const navRef = useRef(null);
  const location = useLocation();
      // useEffect(()=>{
      //         const unsubscribe  = onAuthStateChanged(auth, (user) => {  
      //             setLoading(false)  
      //             if (user) {
      //                 setLoggedIn(true)
      //             } else {
      //                 setLoggedIn(false);
                      
      //             }
      //         });
              
      //         return ()=> unsubscribe ()
      //     },[]);
      useEffect(() => {
        const activeLink = navRef.current.querySelector('.active');
        if (activeLink) {
          const { offsetLeft, offsetWidth } = activeLink;
          setCircleStyle({
            left: offsetLeft + offsetWidth / 2,
            width: 10,
            height: 10,
            transform: 'translateX(-50%)',
          });
        }
      }, [location]);

  return (
    <SNavBarBox >
      <SNavBarUl ref={navRef}>
          <SNavBarLinkNav to="/" activeClassName="active-link" >Home</SNavBarLinkNav>
          <SNavBarLinkNav to="/psychologists" activeClassName="active-link">Psychologists</SNavBarLinkNav>
          {loggedIn ? <SNavBarLinkNav to='/favorites' activeClassName="active-link">Favorites</SNavBarLinkNav> : <></>}
            
          <SCircleContainer {...circleStyle}></SCircleContainer>
      </SNavBarUl>
    </SNavBarBox>
  )
}
