import React, { useState } from 'react'
import {FilterContainer, FilterTitle} from './Filter.styled'
import { MenuItem, Select} from '@mui/material'
import { styled } from '@mui/material/styles';
import { Padding } from '@mui/icons-material';

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
        '& .MuiInputBase-input': {border: 'none'},
        // padding: '16px 162px 16px 18px',
        // border: 'none',
        // '& .MuiSelect-icon': {
        //   color: '#666',
        // },
        // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        //   borderColor: theme.palette.primary.main,
        // },
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
      >
          <MenuItem onClick={()=>handleFilter('atoz')} value='atoz' data-key="byABC">A to Z</MenuItem>
          <MenuItem onClick={()=>handleFilter('ztoa')} value='ztoa' data-key="byABC">Z to A</MenuItem>
          <MenuItem onClick={()=>handleFilter('less10')} value='less10' data-key="byPrice">Less than 10$</MenuItem>
          <MenuItem onClick={()=>handleFilter('greater10')} value='greater10' data-key="byPrice">Greater than 10$</MenuItem>
          <MenuItem onClick={()=>handleFilter('popular')} value='popular' data-key="byPopularity">Popular</MenuItem>
          <MenuItem onClick={()=>handleFilter('notpopular')} value='notpopular' data-key="byPopularity">Not popular</MenuItem>
          <MenuItem onClick={()=>handleFilter('showAll')} value='showAll' data-key="showAll">Show all</MenuItem>
      </SFilterSelect>
    </FilterContainer>
  )
}
