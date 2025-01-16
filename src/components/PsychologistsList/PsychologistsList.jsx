import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { selectPsychologists} from '../../redux/Psychologists/PsychologistsSlice';
import { PsychologistsCard } from '../PsychologistsCard/PsychologistsCard';
import { ListContainer, ListUl } from './PsychologistsList.styled';
// import { changeFilter, selectFilter } from '../../redux/Filter/FilterSlice';
// import { psychologistThunk } from '../../redux/Psychologists/operations';
import { getPsychologists } from '../../api/api';
import { toast } from 'react-toastify';



export const PsychologistsList = ({ setLoading, filter }) => {
  const [psychologists, setPsychologists] = useState([]);
  const [limit, setLimit] = useState(3);
  const [morePsychologists, setMorePsychologists] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setMorePsychologists(true);
      try {
        setLoading(true);
        setIsInitialLoading(true);
        const psychologistsData = await getPsychologists(limit, filter);
        
        if (filter === 'Z to A' || filter === 'Popular') {
          setPsychologists(psychologistsData.reverse());
        } else {
          setPsychologists(psychologistsData);
        }
        setLoading(false);
        setIsInitialLoading(false);
        if (psychologistsData.length < limit) {
          setMorePsychologists(false);
          toast.info(`You have reached the end of psychologists list.`);
        }
      } catch {
        setIsInitialLoading(false);
        setMorePsychologists(false);
        toast.info(`There are no matches for your filter.`);
      }
    };
    fetchData();
  }, [limit, setLoading, filter]);


  const loadMore = (e) => {
    setLimit((prevLimit) => prevLimit + 3);
    e.target.blur();
  };

  return (
        <ListContainer>
            <ListUl>
            {psychologists?.map(item =>
            (
                <li  key={item.id}>
                  <PsychologistsCard psychologist={item}/>
                </li>)
              )}
            </ListUl>
            <button onClick={loadMore}>Завантажити ще</button>
        </ListContainer>
      )
    }
















  // const psychologists = useSelector(selectPsychologists);
  // const dispatch = useDispatch()
  //   dispatch(psychologistThunk());
  // const filterTodo = useSelector(selectFilter);
  // const handleChangeFilter = (value) => {
  //   dispatch(changeFilter(value))
  

  // console.log(psychologists);

  // const  handleSortByName=(a, b) =>{
  //   if(a.id){
  //     return (a.name > b.name) - (a.name < b.name);
  //   }
  // };
  // const  handleSortByNameDesc=(a, b) =>{
  //   if(a.id){
  //     return (a.name < b.name)- (a.name > b.name);
  //   }
  // };
  // const handleByPriceLess = (a)=> {
  //   if(a.id)
  //     return (a.price_per_hour <= 170)
  // };
  // const handleByPriceGreater = (a)=> {
  //   if(a.id)
  //     return (a.price_per_hour > 170)
  // }
  // const handleByPopular = (a)=> {
  //   if(a.id)
  //     return (a.rating > 4.65)
  // }
  // const handleByNotPopular = (a)=> {
  //   if(a.id)
  //     return (a.rating <= 4.65)
  // }
  
  // const getFilterData = () => {
  //   switch(filterTodo) {
      
  //       case 'atoz':
  //         return psychologists.slice(0,40).sort(handleSortByName);
          
  //       case 'ztoa':
  //         return psychologists.slice(0,40).sort(handleSortByNameDesc);

  //       case 'less10':
  //         return psychologists.filter(handleByPriceLess);

  //       case 'greater10':
  //         return psychologists.filter(handleByPriceGreater);
        
  //       case 'popular':
  //         return psychologists.filter(handleByPopular);

  //       case 'notpopular':
  //         return psychologists.filter(handleByNotPopular);

  //       case 'showAll':
  //         return psychologists;

  //       default:
  //         return psychologists
  //  }}
  
  //  const filterItems = getFilterData()
  // console.log(filterItems);

//   return (
//     <ListContainer>
//         <ListUl>
//         {psychologists?.map(item =>
//         (
//             <li  key={item.id}>
//               <PsychologistsCard psychologist={item}/>
//             </li>)
//           )}
//         </ListUl>
//         <button onClick={loadMore}>Завантажити ще</button>
//     </ListContainer>
//   )
// }

