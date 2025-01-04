import React, { useState } from "react";
import { PsychologistsList } from "../../components/PsychologistsList/PsychologistsList";
import { Filter } from "../../components/Filter/Filter";

export const PsychologistsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('A to Z');
  
  return ( 
    <>
      {/* {isLoading && <Loader size={25} />} */}
      <div>
        {/* <Filter/> */}
        <PsychologistsList setLoading={setIsLoading} />
      </div>
    </>
  )
};
