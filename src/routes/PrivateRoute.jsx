import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../services/FirebaseApp';
import { Loader } from '../components/Loader/Loader';

export const PrivateRoute = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        const unsubscribe  = onAuthStateChanged(auth, (user) => {  
            setLoading(false)  
            if (user) {
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false);
                toast.info('Please log in to your account to visit this page.');
            }
        });
        
        return ()=> unsubscribe ()
    },[]);

    if(loading) {
        return <Loader />;
    }
    
   if (!isLoggedIn) {
        return <Navigate to="/" />;
    }

    return children;
}

