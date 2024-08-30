import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPsychologists } from '../../redux/Psychologists/PsychologistsSlice';
import { psychologistThunk } from '../../redux/Psychologists/operations';
import { PsychologistsCard } from '../PsychologistsCard/PsychologistsCard';
import { ListContainer, ListUl } from './PsychologistsList.styled';
import { selectFilter } from '../../redux/Filter/FilterSlice';

export const PsychologistsList = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectPsychologists);
  const filterTodo = useSelector(selectFilter);

  const  handleSortByName=(a, b) =>{
    if(a.id){
      return (a.name > b.name) - (a.name < b.name);
    }
  };
  const  handleSortByNameDesc=(a, b) =>{
    console.log(a)
    if(a.id){
      return (a.name < b.name)- (a.name > b.name);
    }
  };
  const getFilterData = () => {
    switch(filterTodo) {
      
        case 'atoz':
          console.log(psychologists);
          return psychologists.slice(0,40).sort(handleSortByName);
          return psychologists.filter((item) => [1,2,3].includes(item.id));
          case 'ztoa':
            return psychologists.slice(0,40).sort(handleSortByNameDesc);
          default:
            return psychologists
   }}
  
   const filterItems = getFilterData()

 

  useEffect(() => {
    dispatch(psychologistThunk());
  }, [dispatch]);
  
  return (
    <ListContainer>
        <ListUl>
        {filterItems.map(item =>
        (
            <li  key={item.id}>
              <PsychologistsCard psychologists={item}/>
            </li>)
          )}
        </ListUl>
        
    </ListContainer>
  )
}

