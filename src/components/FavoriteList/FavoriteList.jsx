import { useEffect, useState } from 'react'
import { GetUser } from '../GetUser/GetUser';
import { getUserFavoritesLimited, getUserFavoritesTotal } from '../../api/api';
import { toast } from 'react-toastify';
import { PsychologistsCard } from '../PsychologistsCard/PsychologistsCard';
import { SFavListBtn, SFavListContainer, SFavListUl } from './FavoriteList.styled';


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
        if (totalPsychologistObject) {
          const totalPsychologistArray = Object.values(totalPsychologistObject);
          setTotalPsychologist(totalPsychologistArray.length);
          setIsInitialLoading(false);
          if (
            totalPsychologistArray.length === 0 ||
            totalPsychologistArray.length === 3 ||
            totalPsychologistArray.length < limit
          ) {
            setMorePsychologist(false);
            setIsInitialLoading(false);
            toast.info(`You have reached the end of psychologist's list.`);
          }
        }
        const psychologistFavoritesObject = await getUserFavoritesLimited(
          userId,
          limit,
          filter
        );
          setLoading(false);
        if (psychologistFavoritesObject) {
          const psychologistFavoritesArray = Object.values(psychologistFavoritesObject);
          if (filter === 'ztoa' || filter === 'popular') {
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
  
  const loadMore = (e) => {
    setLimit((prevLimit) => prevLimit + 3);
    e.target.blur();
  };

  const handleRemoveFromFavorites = (name) => {
    setPsychologistFavorites((prevPsychologist) =>
      prevPsychologist.filter((psychologist) => psychologist.name !== name)
    );
  };

  return (
    <SFavListContainer>
      <SFavListUl>
        {psychologistFavorites?.map(item => 
          (<PsychologistsCard key={item.name} psychologist={item} {...item} onRemoveFromFavorites={handleRemoveFromFavorites}/>)
        )}
      </SFavListUl>
        <SFavListBtn onClick={loadMore}>Load more</SFavListBtn>
    </SFavListContainer>
  )
}










