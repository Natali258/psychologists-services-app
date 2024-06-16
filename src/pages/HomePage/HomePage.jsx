import React from "react";
import { MainPhoto } from "../../components/MainPhoto/MainPhoto";
import { Icon } from "../../components/Icon/Icon";
import { SButton, SButtonIcon, SButtonText } from "./HomePage.styled";






export const HomePage = () => {
  return <div>
    <div>
      <h1>The road to the depths of the human soul</h1>
      <p>We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our experienced psychologists.</p>
      <SButton>
        <SButtonText>Get started</SButtonText>
        <SButtonIcon>
          <Icon name='arrow-up-right' size='18' fill='#fbfbfb'/>
        </SButtonIcon>
      </SButton>
    </div>
    <div>
      <MainPhoto/>
    </div>
    
  </div>;
};
