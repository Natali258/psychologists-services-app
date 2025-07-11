import React, { useEffect, useState } from 'react'

export const FavoriteList = () => {
    const [favorites, setFavorites] = useState([]);

    // useEffect(() => {
    //     const favoritesFromLocalStorage = JSON.parse(localStorage.getItem("favorites")) || [];
    //     setFavorites(favoritesFromLocalStorage);
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("favorites", JSON.stringify(favorites));
    // }, [favorites]);

  return (
    <div>
      <h1>Улюблені</h1>
      {favorites.length > 0 ? (
        <div>
          {favorites.map((psychologist) => (
            <div key={psychologist.id}>
              <h3>{psychologist.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>Немає улюблених психологів</p>
      )}
    </div>
  )
}
