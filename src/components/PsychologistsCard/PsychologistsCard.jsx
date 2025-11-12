import React, {useState } from 'react'
import { CardContainer, CardUl, ImgContainer, ImgStyle, SBtnAppointment, SBtnHeart, SBtnRead, SContainerPrice, SContainerTitle, SLiPrice, SLiStar, SListInfo, SListInfoLi, SListInfoLiSpan, SLiStroke, SPsName, SSpan, SSpanPrice, SSpanRating, STextAbout } from './PsychologistsCard.styled';
import { Reviewss } from '../Reviewss/Reviewss';
import { MakeAppointment } from '../MakeAppointment/MakeAppointment';
import { IconSvg } from '../Icon/IconSvg';
import { addToFavorites} from '../../api/api';
import { GetUser } from '../GetUser/GetUser';




export const PsychologistsCard = ({psychologist}) => {
    const {reviews} = psychologist;
    const [openReviews, setOpenReviews] = useState(false)
    const [hiddenBtn, setHiddenBtn] = useState(true)
    const [openAppointment, setOpenAppointment]=React.useState(false);
    const userId = GetUser();
    
     const toggleFav = async() => {
        if (!userId) {
          alert("Увійдіть у систему, щоб додати до обраного.");
          return;
        }
        await addToFavorites(userId, psychologist);
      }
  
    const handlerReadMore = ()=>{
        setOpenReviews(true)
        setHiddenBtn(false)
    }
    const handlerOpenAppointment = () => setOpenAppointment(true);
    const handlerCloseAppointment = () => setOpenAppointment(false)


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
                            <IconSvg id='star-yellow' size={20} />
                            <SSpanRating>Rating: {psychologist.rating}</SSpanRating>
                        </SLiStar>
                        <SLiStroke></SLiStroke>
                        <SLiPrice>Price / 1 hour: <SSpanPrice>{psychologist.price_per_hour}$</SSpanPrice></SLiPrice>
                    </SContainerPrice>
                    <SBtnHeart onClick={() => toggleFav(psychologist.id)} > <IconSvg id='heart' size={26}/>
                        {/* {isFav(psychologist.id) ? <IconSvg id='heart-green' size={26}/> : <IconSvg id='heart' size={26}/>} */}
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
                    <SBtnAppointment onClick={handlerOpenAppointment}>Make an appointment</SBtnAppointment>
                </div> : <div></div>}
            </li>
        </CardUl>
        <MakeAppointment open={openAppointment} onClose={handlerCloseAppointment} psychologist={psychologist}/>
    </CardContainer>
  )
}

