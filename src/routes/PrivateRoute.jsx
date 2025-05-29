import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const PrivateRoute = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
        const auth = getAuth();
        const loginValue = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true)
                const uid = user.uid;
                
            } else {
                setIsLoggedIn(false);
                toast.info('Please log in to your account to visit this page.');
            }
        });
        console.log(loginValue);
        
        return ()=> loginValue()
    },[])
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute