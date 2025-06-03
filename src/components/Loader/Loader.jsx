import React from "react";
import { Dot, LoaderWrapper, positions } from "./Loader.styled";


export const Loader = () => {

   return (
    <div>
      <LoaderWrapper>
        {positions.map((_, i) => (
          <Dot key={i} index={i} />
        ))}
      </LoaderWrapper>
    </div>
   )
}