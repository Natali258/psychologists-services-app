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
    if(a.id){
      return (a.name < b.name)- (a.name > b.name);
    }
  };
  const handleByPriceLess = (a)=> {
    if(a.id)
      return (a.price_per_hour <= 170)
  };
  const handleByPriceGreater = (a)=> {
    if(a.id)
      return (a.price_per_hour > 170)
  }
  const handleByPopular = (a)=> {
    if(a.id)
      return (a.rating > 4.65)
  }
  const handleByNotPopular = (a)=> {
    if(a.id)
      return (a.rating <= 4.65)
  }
  

  const getFilterData = () => {
    switch(filterTodo) {
      
        case 'atoz':
          return psychologists.slice(0,40).sort(handleSortByName);
          
        case 'ztoa':
          return psychologists.slice(0,40).sort(handleSortByNameDesc);

        case 'less10':
          return psychologists.filter(handleByPriceLess);

        case 'greater10':
          return psychologists.filter(handleByPriceGreater);
        
        case 'popular':
          return psychologists.filter(handleByPopular);

        case 'notpopular':
          return psychologists.filter(handleByNotPopular);

        case 'showAll':
          return psychologists;

        default:
          return psychologists
   }}
  
   const filterItems = getFilterData()
   console.log(filterItems);
   

 

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

