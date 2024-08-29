import React from 'react'
import {FilterContainer, FilterTitle} from './Filter.styled'
import { MenuItem, Select } from '@mui/material'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/Filter/FilterSlice'



export const Filter = () => {
  
  const dispatch = useDispatch()
  const handleChangeFilter = (value) => {
    console.log(value);
    
    dispatch(changeFilter(value))
  }
  
    
 
  return (
    <FilterContainer>
      <FilterTitle>Filters</FilterTitle>
      <Select
        defaultValue='atoz'
        // labelId="demo-simple-select-label"
        // id="demo-simple-select"
        // onChange={handleChange}
      >
          <MenuItem onClick={()=>handleChangeFilter('atoz')} value='atoz'>A to Z</MenuItem>
          <MenuItem onClick={()=>handleChangeFilter('ztoa')} value='ztoa'>Z to A</MenuItem>
          <MenuItem onClick={()=>handleChangeFilter('less10')} value='less10'>Less than 10$</MenuItem>
          <MenuItem onClick={()=>handleChangeFilter('greater10')} value='greater10'>Greater than 10$</MenuItem>
          <MenuItem onClick={()=>handleChangeFilter('popular')} value='popular'>Popular</MenuItem>
          <MenuItem onClick={()=>handleChangeFilter('notpopular')} value='notpopular'>Not popular</MenuItem>
          <MenuItem onClick={()=>handleChangeFilter('showAll')} value='showAll'>Show all</MenuItem>
      </Select>
    </FilterContainer>
  )
}
