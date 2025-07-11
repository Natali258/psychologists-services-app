import React, { useEffect, useState } from 'react'
import { CardContainer, CardUl, ImgContainer, ImgStyle, SBtnAppointment, SBtnHeart, SBtnRead, SContainerPrice, SContainerTitle, SLiPrice, SLiStar, SListInfo, SListInfoLi, SListInfoLiSpan, SLiStroke, SPsName, SSpan, SSpanPrice, SSpanRating, STextAbout } from './PsychologistsCard.styled';
import { Reviewss } from '../Reviewss/Reviewss';
import { MakeAppointment } from '../MakeAppointment/MakeAppointment';
import { IconSvg } from '../Icon/IconSvg';







export const PsychologistsCard = ({psychologist}) => {
    const { reviews} = psychologist;
    const [openReviews, setOpenReviews] = useState(false)
    const [hiddenBtn, setHiddenBtn] = useState(true)
    const [openAppointment, setOpenAppointment]=React.useState(false);
    const [favorites, setFavorites] = useState([]);
    
    
    
    const handlerReadMore = ()=>{
        setOpenReviews(true)
        setHiddenBtn(false)
    }

    const handlerOpenAppointment = () => setOpenAppointment(true);
    const handlerCloseAppointment = () => setOpenAppointment(false)

  //    // 🚀 Завантаження з localStorage при першому запуску
  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  // 💾 Збереження у localStorage при зміні favorites
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // const toggleFavorite = (card) => {
  //   const exists = favorites.find((fav) => fav.id === card.id);
  //   if (exists) {
  //     setFavorites(favorites.filter((fav) => fav.id !== card.id));
  //   } else {
  //     setFavorites([...favorites, card]);
  //   }
  // };
    
  const toggleFavorite = (psychologist) => {
    console.log(psychologist);
    
    const exists = favorites.find((fav) => fav.id === psychologist.id);
    
    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== psychologist.id));
    } else {
      setFavorites([...favorites, psychologist]);
    }
  };

  const isFavorite = (psychologistId) => {

    console.log(psychologistId);
    
    return favorites.some((fav) => fav.id === psychologistId);
  };
    
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
                    <SBtnHeart onClick={() => toggleFavorite(psychologist)} >
                        <IconSvg id='heart' size={23} style={{ backgroundColor: isFavorite(psychologist.id) ? 'red' : 'grey'}}/>
                        {/* <Icon name='heart-green' size={23}/> */}
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

