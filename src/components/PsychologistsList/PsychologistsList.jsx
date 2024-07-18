import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPsychologists } from '../../redux/Psychologists/PsychologistsSlice';
import { psychologistThunk } from '../../redux/Psychologists/operations';
import { PsychologistsCard } from '../PsychologistsCard/PsychologistsCard';
import { ListContainer, ListUl } from './PsychologistsList.styled';

export const PsychologistsList = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectPsychologists);

  useEffect(() => {
    dispatch(psychologistThunk());
  }, [dispatch]);
  
  return (
    <ListContainer>
        <ListUl>
        {psychologists.map(item => 
        (
            <li  key={item.id}>
              <PsychologistsCard psychologists={item}/>
            </li>)
          )}
        </ListUl>
        
    </ListContainer>
  )
}

