import React from 'react'
import { CardContainer, CardUl, ImgContainer, ImgStyle } from './PsychologistsCard.styled';

export const PsychologistsCard = ({psychologists}) => {
    console.log(psychologists);
    
  return (
    <CardContainer>
        <CardUl>
            <ImgContainer>
                <ImgStyle src={psychologists.avatar_url} alt="people" />
                
            </ImgContainer>
            <li>
                <div>Psychologist</div>
                <ul>
                    <li>Rating: {psychologists.rating}</li>
                    <li>Price / 1 hour: {psychologists.price_per_hour}</li>
                </ul>
                <h2>{psychologists.name}</h2>
                <ul>
                    <li>Experience: {psychologists.experience}</li>
                    <li>License: {psychologists.license}</li>
                    <li>Specialization: {psychologists.specialization}</li>
                    <li>Initial_consultation: {psychologists.initial_consultation}</li>
                </ul>
                <p>{psychologists.about}</p>
                <button>Read more</button>
            </li>
        </CardUl>
    </CardContainer>
  )
}
