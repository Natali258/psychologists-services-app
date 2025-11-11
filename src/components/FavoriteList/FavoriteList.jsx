import { useEffect, useState } from 'react'
import { GetUser } from '../GetUser/GetUser';
import { getUserFavoritesLimited, getUserFavoritesTotal } from '../../api/api';
import { toast } from 'react-toastify';
import { PsychologistsCard } from '../PsychologistsCard/PsychologistsCard';


export const FavoriteList = ({ setLoading, filter }) => {
      const [psychologistFavorites, setPsychologistFavorites] = useState([]);
      const [limit, setLimit] = useState(3);
      const [morePsychologist, setMorePsychologist] = useState(false);
      const [totalPsychologist, setTotalPsychologist] = useState(0);
      const [isInitialLoading, setIsInitialLoading] = useState(true);
      const userId = GetUser();

      
      useEffect(() => {
        const fetchFavorites = async () => {
          setMorePsychologist(true);
      try {
        setLoading(true);
        setIsInitialLoading(true);
        const totalPsychologistObject = await getUserFavoritesTotal(userId);
        // console.log(totalPsychologistObject);
        if (totalPsychologistObject) {
          const totalPsychologistArray = Object.values(totalPsychologistObject);
          // console.log(totalPsychologistArray);
          setTotalPsychologist(totalPsychologistArray.length);
          setIsInitialLoading(false);
          // console.log(totalPsychologist);

          if (
            totalPsychologistArray.length === 0 ||
            totalPsychologistArray.length === 3 ||
            totalPsychologistArray.length < limit
          ) {
            setMorePsychologist(false);
            setIsInitialLoading(false);
            toast.info(`You have reached the end of nannies' list.`);
          }
        }

        const psychologistFavoritesObject = await getUserFavoritesLimited(
          userId,
          limit,
          filter
        );

        console.log(psychologistFavoritesObject);
          setLoading(false);
        if (psychologistFavoritesObject) {
          const psychologistFavoritesArray = Object.values(psychologistFavoritesObject);
            console.log(psychologistFavoritesArray);
          if (filter === 'Z to A' || filter === 'Popular') {
            setPsychologistFavorites(psychologistFavoritesArray.reverse());
          } else {
            setPsychologistFavorites(psychologistFavoritesArray);
          }
        } else {
          return;
        }
      } catch {
        toast.error(`Something went wrong.`);
      }
    };
    fetchFavorites();
        
  }, [limit, userId, totalPsychologist, setLoading, filter]);
  console.log(psychologistFavorites);

  return (
    <>
      <ul>
        {psychologistFavorites?.map(item => 
          (<PsychologistsCard key={item.name} psychologist={item} {...item}/>)
        )}
      </ul>
        {/* <button onClick={loadMore}>Load more</button> */}
    </>
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
