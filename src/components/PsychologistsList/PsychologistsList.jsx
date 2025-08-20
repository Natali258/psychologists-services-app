import React, { useEffect, useState } from 'react'
import { PsychologistsCard } from '../PsychologistsCard/PsychologistsCard';
import { ListContainer, ListUl, ListBtn } from './PsychologistsList.styled';
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
        
        if (filter === 'ztoa' || filter === 'popular') {
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
              ( <PsychologistsCard key={item.name} psychologist={item} />)
            )}
            </ListUl>
            <ListBtn onClick={loadMore}>Load more</ListBtn>
        </ListContainer>
      )
    }
