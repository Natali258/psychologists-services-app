import React from 'react'
import { CardContainer, CardUl, ImgContainer, ImgStyle } from './PsychologistsCard.styled';


export const PsychologistsCard = ({psychologist}) => {
    // console.log(psychologist);
    
  return (
    <CardContainer>
        <CardUl>
            <ImgContainer>
                <ImgStyle src={psychologist.avatar_url} alt="people" />
                
            </ImgContainer>
            <li>
                <div>Psychologist</div>
                <ul>
                    <li>Rating: {psychologist.rating}</li>
                    <li>Price / 1 hour: {psychologist.price_per_hour}$</li>
                </ul>
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
