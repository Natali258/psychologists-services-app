import React, { useState } from 'react'
import {FilterContainer, FilterTitle} from './Filter.styled'
import { colors, Menu, MenuItem, OutlinedInput, outlinedInputClasses, Select, selectClasses} from '@mui/material'
import { styled } from '@mui/material/styles';
import { BorderColor, Padding } from '@mui/icons-material';
import shadows from '@mui/material/styles/shadows';

export const Filter = ({setFilter}) => {
    const [filter, setFilterLocal] = useState('atoz')
    

    const handleFilter = (filter) => {
        setFilter(filter);
        setFilterLocal(filter);
        
      };

      const SFilterSelect = styled(Select)({
        backgroundColor: '#54be96',
        borderRadius: '14px',
        border: 'none',
        '& .MuiOutlinedInput-input': {padding: '14px 0 14px 18px', width: '162px'},
        '& .MuiOutlinedInput-notchedOutline': {border: 'none'}
      });
      const SFilterMenuItem = styled(MenuItem)({
        backgroundColor: 'none',
        color: 'rgba(25, 26, 21, 0.3)',
        '&:hover': {backgroundColor: '#54be96'},
        '&.Mui-focusVisible': {backgroundColor: '#54be96'},
        '&.Mui-selected': {backgroundColor: '#54be96', сolor: '#191a15'}
      });

      
      // const handleResetFilter = (e) => {
      //   setFilterLocal('A to Z');
      //   setFilter('A to Z');
      //   e.target.blur();
      // };
   

  return (
    <FilterContainer>
      <FilterTitle>Filters</FilterTitle>
      <SFilterSelect
        value={filter}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: '14px',
              boxShadow: '0 20px 69px 0 rgba(0, 0, 0, 0.07)',
              backgroundColor: '#fff',
              mt: '8px'
            },
          },
        }}
      >
          <SFilterMenuItem onClick={()=>handleFilter('atoz')} value='atoz' data-key="byABC">A to Z</SFilterMenuItem>
          <SFilterMenuItem onClick={()=>handleFilter('ztoa')} value='ztoa' data-key="byABC">Z to A</SFilterMenuItem>
          <SFilterMenuItem onClick={()=>handleFilter('less10')} value='less10' data-key="byPrice">Less than 10$</SFilterMenuItem>
          <SFilterMenuItem onClick={()=>handleFilter('greater10')} value='greater10' data-key="byPrice">Greater than 10$</SFilterMenuItem>
          <SFilterMenuItem onClick={()=>handleFilter('popular')} value='popular' data-key="byPopularity">Popular</SFilterMenuItem>
          <SFilterMenuItem onClick={()=>handleFilter('notpopular')} value='notpopular' data-key="byPopularity">Not popular</SFilterMenuItem>
          <SFilterMenuItem onClick={()=>handleFilter('showAll')} value='showAll' data-key="showAll">Show all</SFilterMenuItem>
      </SFilterSelect>
    </FilterContainer>
  )
}
