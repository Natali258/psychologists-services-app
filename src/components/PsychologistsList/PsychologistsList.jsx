import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPsychologists } from '../../redux/Psychologists/PsychologistsSlice';
import { psychologistThunk } from '../../redux/Psychologists/operations';
import { PsychologistsCard } from '../PsychologistsCard/PsychologistsCard';

export const PsychologistsList = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectPsychologists);

  useEffect(() => {
    dispatch(psychologistThunk());
  }, [dispatch]);
  
  return (
    <div>
        <ul>
        {psychologists.map(item => 
        (
            <li  key={item.id}>
              <PsychologistsCard psychologists={item}/>
            </li>)
          )}
        </ul>
        
    </div>
  )
}

