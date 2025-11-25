import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { addToFavorites, getUserFavorites, removeFromFavorites } from '../../api/api';
import { useLocation } from 'react-router-dom';

export const useFavorite = (userId, psychologist, onRemoveFromFavorites) => {
  const [isFavorites, setIsFavorites] = useState(false);
  const locationPath = useLocation();

  // Перевірка при завантаженні компонента
  useEffect(() => {
    const checkFavorite = async () => {
      if (!userId || !psychologist) return;

      try {
        const favorites = await getUserFavorites(userId);

        if (favorites) {
          const isFav = Object.values(favorites).some(
            (fav) => fav.name === psychologist.name
          );
          setIsFavorites(isFav);
        }
      } catch (e) {
        console.log(e);
      }
    };

    checkFavorite();
  }, [userId, psychologist]);

  const toggleFavorite = async () => {
    if (!userId) {
      toast.info('Please log in to your account to add nanny to favorites.');
    } else {
      try {
        const userFavorites = await getUserFavorites(userId);
        if (userFavorites) {
          const favoriteKeys = Object.keys(userFavorites);
          const favoritePsychologist = favoriteKeys.find(
            (key) => userFavorites[key].name === psychologist.name
          ); 
          if (favoritePsychologist) {
            await removeFromFavorites(userId, favoritePsychologist);
            setIsFavorites(false);
            if (locationPath.pathname === '/favorites') {
              onRemoveFromFavorites(psychologist.name);
            }
          } else {
            await addToFavorites(userId, psychologist);
            setIsFavorites(true);
          }
        } else {
          await addToFavorites(userId, psychologist);
          setIsFavorites(true);
        }
      } catch (error) {
        console.log(error.message);
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  return { isFavorites, toggleFavorite };
};
