import React, { useEffect, useState } from 'react'
import { useFavorites } from '../hooks/useFavorite'
import { getPsychologists } from '../../api/api'
import { toast } from 'react-toastify';
// import { useFavorites } from '../hooks/useFavorite'
// import { PsychologistsCard } from '../PsychologistsCard/PsychologistsCard';
// import { getPsychologists } from '../../api/api';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../services/FirebaseApp';

export const FavoriteList = ({ setLoading, filter }) => {
  const [favPsychologists, setFavPsychologists] = useState([]);
  const [limit, setLimit] = useState(3);
  const [moreFavPsychologists, setMoreFavPsychologists] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const {favorites, isFavorite} = useFavorites()
  console.log(favorites);
  useEffect(() => {
      const FavoriteData = async () => {
        // setMorePsychologists(true);
        try {
          // setLoading(true);
          // setIsInitialLoading(true);
          const psychologistsData = await getPsychologists(limit, filter);
          console.log(psychologistsData);
          const favoritePsychologists = psychologistsData.filter(isFavorite);
          // console.log(favoritePsychologists);
          // if (filter === 'ztoa' || filter === 'popular') {
          //   setPsychologists(psychologistsData.reverse());
          // } else {
          //   setPsychologists(psychologistsData);
          // }
          // setLoading(false);
          // setIsInitialLoading(false);
          // if (psychologistsData.length < limit) {
          //   setMorePsychologists(false);
          //   toast.info(`You have reached the end of psychologists list.`);
          // }
        } catch {
          // setIsInitialLoading(false);
          // setMorePsychologists(false);
          toast.info(`There are no matches for your filter.`);
        }
      };
      FavoriteData();
    }, [favorites,limit, setLoading, filter]);
  

  
    
    
    
    // const favoritePsychologists = psychologists.filter((p) =>favorites.includes(p.id));

    // console.log(favoritePsychologists);
    
  return (
    <div> 12345</div>
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
