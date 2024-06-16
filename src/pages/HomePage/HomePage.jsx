import React from "react";
import { MainPhoto } from "../../components/MainPhoto/MainPhoto";
import { Icon } from "../../components/Icon/Icon";
import { SButton, SButtonIcon, SButtonText, SContentContainer, SHomeContainer, SHomeText, STitle, STitleContainer, STitleSpan } from "./HomePage.styled";






export const HomePage = () => {
  return <SHomeContainer>
    <SContentContainer>
    <STitleContainer>
      <STitle>The road to the <STitleSpan>depths</STitleSpan> of the human soul</STitle>
      <SHomeText>We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our experienced psychologists.</SHomeText>
      <SButton>
        <SButtonText>Get started</SButtonText>
        <SButtonIcon>
          <Icon name='arrow-up-right' size='18' fill='#fbfbfb'/>
        </SButtonIcon>
      </SButton>
    </STitleContainer>
    <div>
      <MainPhoto/>
    </div>
    
  </SContentContainer>;
  </SHomeContainer>
};
