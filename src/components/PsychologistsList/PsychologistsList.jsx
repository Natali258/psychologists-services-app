import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPsychologists } from '../../redux/Psychologists/PsychologistsSlice';
import { psychologistThunk } from '../../redux/Psychologists/operations';

export const PsychologistsList = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectPsychologists);

  useEffect(() => {
    dispatch(psychologistThunk());
  }, [dispatch]);
  
  return (
    <div>
        <ul>
        {psychologists.map(psychologist => 
        (
            <li  key={psychologist.id}>
              {psychologist.name}
            </li>)
          )}
        </ul>
        
    </div>
  )
}

