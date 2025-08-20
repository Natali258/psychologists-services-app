import React, { useState } from "react";
import { FavoriteList } from "../../components/FavoriteList/FavoriteList";


export const FavoritesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('atoz');

  return (<>
    <FavoriteList filter={filter}/>
  </>);
};
