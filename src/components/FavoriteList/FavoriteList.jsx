import React, { useEffect, useState } from 'react'
import { getUserFavorites } from '../../api/api'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../services/FirebaseApp';
import { toast } from 'react-toastify';


export const FavoriteList = ({ setLoading, filter }) => {
      const [user, setUser] = useState(null);
      const [IsFavorites, setIsFavorites] = useState([]);
      
      console.log(user);
      console.log(IsFavorites);
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
          setUser(firebaseUser);
        });
        return () => unsubscribe();
      }, []);
      
      useEffect(() => {
        const fetchUserFavorites = async () => {
        //   if (!user) {
        //   alert("Увійдіть у систему, щоб додати до обраного.");
        //   return;
        // }  
          try {
            const userFavorites = await getUserFavorites(user.uid);
            const ids = Object.keys(userFavorites);
            setIsFavorites(ids)
            
            
  
           
          } catch {
            toast.error('Something went wrong. Please try again.');
          }
        };
        fetchUserFavorites()
    }, [user]);
  
   
   
   
      
   
  

  
  
    
  return (
    <div> 12345 </div>
  )
}










// export const FavoriteList = ({psychologists}) => {
//     const {favorites} = useFavorites()

//     console.log(psychologists);
//     const favoritePsychologists = psychologists.filter((p) =>favorites.includes(p.id));

//     console.log(favoritePsychologists);
    
//   return (
//     <div> 12345
//       {favoritePsychologists.length > 0 ? (
//         <div>
//           {favoritePsychologists.map((psychologist) => (
//             <PsychologistsCard key={psychologist.id} psychologist={psychologist} />
//           ))}
//         </div>
//       ) : (
//         <p>Немає улюблених психологів</p>
//       )}
//     </div>
//   )
// }
