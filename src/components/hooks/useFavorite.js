import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../services/FirebaseApp';
import { addToFavorites, getUserFavorites, isPsychologistInFavorites } from '../../api/api';

export const useFavorites = ({psychologist}) => {
  const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //   const stored = localStorage.getItem('favorites');
  //   if (stored) {
  //     setFavorites(JSON.parse(stored));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('favorites', JSON.stringify(favorites));
  // }, [favorites]);

  // const toggleFavorite = (id) => {
  //   setFavorites((prev) =>
  //     prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
  //   );
  // };

  // const isFavorite = (id) => favorites.includes(id);

  // return { favorites, toggleFavorite, isFavorite }




  // 2//////
  // getUserFavorites()

  // console.log(psychologist);
  
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
  //     setUser(firebaseUser);
  //   });

  //   return () => unsubscribe();
  // }, []);

  // const toggleFavorite = () => {
  //   if (!user) {
  //     alert("Увійдіть у систему, щоб додати до обраного.");
  //     return;
  //   }

  //   addToFavorites(user.uid, psychologist.id);
  // }

  // const inFavorites = isPsychologistInFavorites(user.uid, psychologist.id);
  // return { user, toggleFavorite}
}