import React from 'react'
import { CardContainer, CardUl, ImgContainer, ImgStyle, SBtnHeart, SContainerPrice, SContainerTitle, SLiPrice, SLiStar, SLiStroke, SSpan, SSpanPrice, SSpanRating } from './PsychologistsCard.styled';
import { IconSvg } from '../Icon/IconSvg';


export const PsychologistsCard = ({psychologist}) => {
    
  return (
    <CardContainer>
        <CardUl>
            <ImgContainer>
                <ImgStyle src={psychologist.avatar_url} alt="people" />
                
            </ImgContainer>
            <li>
                <SContainerTitle>
                    <SSpan>Psychologist</SSpan>
                    <SContainerPrice>
                        <SLiStar>
                            <IconSvg id='star' size={20} />
                            <SSpanRating>Rating: {psychologist.rating}</SSpanRating>
                        </SLiStar>
                        <SLiStroke></SLiStroke>
                        <SLiPrice>Price / 1 hour: <SSpanPrice>{psychologist.price_per_hour}$</SSpanPrice></SLiPrice>
                    </SContainerPrice>
                    <SBtnHeart>
                        <IconSvg id='heart' size={23} />
                    </SBtnHeart>
                </SContainerTitle>
                <h2>{psychologist.name}</h2>
                <ul>
                    <li>Experience: {psychologist.experience}</li>
                    <li>License: {psychologist.license}</li>
                    <li>Specialization: {psychologist.specialization}</li>
                    <li>Initial_consultation: {psychologist.initial_consultation}</li>
                </ul>
                <p>{psychologist.about}</p>
                <button>Read more</button>
            </li>
        </CardUl>
    </CardContainer>
  )
}
