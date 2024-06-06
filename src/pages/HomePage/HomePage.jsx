import React from "react";
import { NavLink } from "react-router-dom";
import { MainPhoto } from "../../components/MainPhoto/MainPhoto";






export const HomePage = () => {
  return <div>
    <div>
      <h1>The road to the depths of the human soul</h1>
      <p>We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our experienced psychologists.</p>
      <NavLink>
        <p>Get started</p>
      </NavLink>
    </div>
    <div>
      <MainPhoto/>
    </div>
    
  </div>;
};
