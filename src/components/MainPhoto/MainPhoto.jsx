import React from 'react'
import { Image } from "../../components";
import { Icon } from "../../components/Icon/Icon";
import { SAnaliticContainer, SCheakContainer, SContainer, SImageContainer, SNumber, SQuestionContainer, SText, STextContainer, SUserContainer } from './MainPhoto.styled';
import { IconSvg } from '../Icon/IconSvg';


export const MainPhoto = () => {
  return (
    <SContainer>
    <SImageContainer><Image.WomanHero/></SImageContainer>
    <SUserContainer>
      <Icon name='people-icon' size='20' fill='white'/>
    </SUserContainer>
    <SQuestionContainer>
    <Icon name='question-mark'size='17' fill='white'/>
    </SQuestionContainer>
    <SAnaliticContainer>
        <SCheakContainer>
            <Icon name='check' size='17' fill='rgba(84, 190, 150, 1)'/>
        </SCheakContainer>
        <STextContainer>
          <SText>Experienced psychologists</SText>
          <SNumber>15,000</SNumber>
        </STextContainer>
    </SAnaliticContainer>
    </SContainer>
  )
}



