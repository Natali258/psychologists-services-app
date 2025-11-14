import React, {useState } from 'react'
import { CardContainer, CardUl, ImgContainer, ImgStyle, SBtnAppointment, SBtnHeart, SBtnRead, SContainerPrice, SContainerTitle, SLiPrice, SLiStar, SListInfo, SListInfoLi, SListInfoLiSpan, SLiStroke, SPsName, SSpan, SSpanPrice, SSpanRating, STextAbout } from './PsychologistsCard.styled';
import { Reviewss } from '../Reviewss/Reviewss';
import { MakeAppointment } from '../MakeAppointment/MakeAppointment';
import { IconSvg } from '../Icon/IconSvg';
import { addToFavorites, getUserFavorites, removeFromFavorites} from '../../api/api';
import { GetUser } from '../GetUser/GetUser';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';




export const PsychologistsCard = ({psychologist, onRemoveFromFavorites}) => {
    const {reviews} = psychologist;
    const [openReviews, setOpenReviews] = useState(false)
    const [hiddenBtn, setHiddenBtn] = useState(true)
    const [openAppointment, setOpenAppointment]=React.useState(false);
    const [IsFavorites, setIsFavorites] = useState([])
    const locationPath = useLocation();
    const userId = GetUser();
    
    //  const toggleFav = async() => {
    //     if (!userId) {
    //       alert("Увійдіть у систему, щоб додати до обраного.");
    //       return;
    //     }
    //     const favoriteIteam = await addToFavorites(userId, psychologist);
    //     console.log(favoriteIteam);
        
    //   }

    const handleFavoriteToggle = async () => {
    if (!userId) {
      toast.info('Please log in to your account to add nanny to favorites.');
    } else {
      try {
        const userFavorites = await getUserFavorites(userId);
        if (userFavorites) {
          const favoriteKeys = Object.keys(userFavorites);
          const favoritePsychologist = favoriteKeys.find(
            (key) => userFavorites[key].name === psychologist.name
          );
          if (favoritePsychologist) {
            await removeFromFavorites(userId, favoritePsychologist);
            setIsFavorites(false);
            if (locationPath.pathname === '/favorites') {
              onRemoveFromFavorites(psychologist.name);
            }
          } else {
            await addToFavorites(userId, psychologist);
            setIsFavorites(true);
          }
        } else {
          await addToFavorites(userId, psychologist);
          setIsFavorites(true);
        }
      } catch (error) {
        console.log(error.message);
        toast.error('Something went wrong. Please try again.');
      }
    }
  };
  
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
                    <SBtnHeart onClick={handleFavoriteToggle} > <IconSvg id='heart' size={26}/>
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

