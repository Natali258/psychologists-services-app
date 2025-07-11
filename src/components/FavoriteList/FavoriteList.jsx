import React from 'react'
import { useFavorites } from '../hooks/useFavorite'
import { PsychologistsCard } from '../PsychologistsCard/PsychologistsCard';
import { getPsychologists } from '../../api/api';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/FirebaseApp';

export const FavoriteList = ({psychologists}) => {
    // const {favorites} = useFavorites()

    // console.log(psychologists);
    // const favoritePsychologists = psychologists.filter((p) =>favorites.includes(p.id));

    // console.log(favoritePsychologists);
    
  return (
    <div> 12345
      {/* {favoritePsychologists.length > 0 ? (
        <div>
          {favoritePsychologists.map((psychologist) => (
            <PsychologistsCard key={psychologist.id} psychologist={psychologist} />
          ))}
        </div>
      ) : (
        <p>Немає улюблених психологів</p>
      )} */}
    </div>
  )
}
