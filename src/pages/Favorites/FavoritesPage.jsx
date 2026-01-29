import React, { useState } from "react";
import { FavoriteList } from "../../components/FavoriteList/FavoriteList";
import { Filter } from "../../components/Filter/Filter";


export const FavoritesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('atoz');
  console.log(isLoading);
  

  return (<>
    {/* {isLoading && <Loader size={25} />} */}
    <Filter setFilter={setFilter} />
    <FavoriteList setLoading={setIsLoading} filter={filter} />
  </>);
};
