import React, { useState } from 'react'
import { CardContainer, CardUl, ImgContainer, ImgStyle, SBtnHeart, SBtnRead, SContainerPrice, SContainerTitle, SLiPrice, SLiStar, SListInfo, SListInfoLi, SListInfoLiSpan, SLiStroke, SPsName, SSpan, SSpanPrice, SSpanRating, STextAbout } from './PsychologistsCard.styled';
import { IconSvg } from '../Icon/IconSvg';
import { Reviewss } from '../Reviewss/Reviewss';





export const PsychologistsCard = ({psychologist}) => {
    const { reviews} = psychologist;
    const [openReviews, setOpenReviews] = useState(false)
    const [hiddenBtn, setHiddenBtn] = useState(true)
    
    const handlerReadMore = ()=>{
        setOpenReviews(true)
        setHiddenBtn(false)
    }
    
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
                <SPsName>{psychologist.name}</SPsName>
                <SListInfo>
                    <SListInfoLi>Experience: <SListInfoLiSpan>{psychologist.experience}</SListInfoLiSpan></SListInfoLi>
                    <SListInfoLi>License: <SListInfoLiSpan>{psychologist.license}</SListInfoLiSpan></SListInfoLi>
                    <SListInfoLi>Specialization: <SListInfoLiSpan>{psychologist.specialization}</SListInfoLiSpan></SListInfoLi>
                    <SListInfoLi>Initial_consultation: <SListInfoLiSpan>{psychologist.initial_consultation}</SListInfoLiSpan></SListInfoLi>
                </SListInfo>
                <STextAbout>{psychologist.about}</STextAbout>
                {hiddenBtn ? <SBtnRead onClick={handlerReadMore}>Read more</SBtnRead> : <div></div>}
                {openReviews ? <div>
                    <ul>
                        {reviews.map(item=>(<Reviewss key={item.reviewer} review={item}/>))}
                    </ul>
                    <button>Make an appointment</button>
                </div> : <div></div>}
            </li>
        </CardUl>
    </CardContainer>
  )
}

