import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from "../../components";


export const HomePage = () => {
  return <div>
    <div>
      <h1>The road to the depths of the human soul</h1>
      <p>We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our experienced psychologists.</p>
      <NavLink>
        <p>Get started</p>

      </NavLink>
    </div>
    <Image.WomanHero/>
    {/* <picture>
      <source srcSet="../../images/hero/women-desktop_@2x.jpg 2x"/>
      <img src="../../images/hero/women-desktop_@1x.jpg" alt="woman" />
    </picture> */}
  </div>;
};
