import React from "react";
import { PsychologistsList } from "../../components/PsychologistsList/PsychologistsList";
import { Filter } from "../../components/Filter/Filter";

export const PsychologistsPage = () => {
  return <div>
    <Filter/>
    <PsychologistsList/>
  </div>;
};
