import React, { useEffect } from 'react'
import { SHeader, SHeaderBoxLink, SHeaderContainer, SHeaderLink, SHeaderLinkSpan } from './Header.styled'
import { AuthorizationMenu } from '../AuthorizationMenu/AuthorizationMenu'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth} from '../../services/FirebaseApp'
import { UserMenu } from '../UserMenu/UserMenu'
import { NavBar } from '../NavBar/NavBar'
import { getUserData } from '../../api/api'

export const Header = () => {
  const[loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(null)
  const [userName, setuserName] = useState(null);
  
    useEffect(()=>{
            const unsubscribe  = onAuthStateChanged(auth, async (user) => {  
                setLoading(false)  
                if (user) {
                  setLoggedIn(user)
                  const uid = user.uid;
                  const getUser = await getUserData(uid);
                  setuserName(getUser.name)
                  
                } else {
                  setLoggedIn(null);
                  setuserName(null);
                    
                }})

            return ()=> unsubscribe ()
        },[]);

  return (
   <SHeader>
     <SHeaderContainer>
        <SHeaderBoxLink><SHeaderLink to="/">psychologists.<SHeaderLinkSpan>services</SHeaderLinkSpan></SHeaderLink></SHeaderBoxLink>
        <NavBar/>
        {loggedIn ? <UserMenu userName={userName}/> : <AuthorizationMenu/> }
    </SHeaderContainer>
   </SHeader>
  )
}
