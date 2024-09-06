import React from 'react'
import {FilterContainer, FilterTitle} from './Filter.styled'
import { MenuItem, Select } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, selectFilter } from '../../redux/Filter/FilterSlice'



export const Filter = () => {
  const dispatch = useDispatch()
  const filterTodo = useSelector(selectFilter);
  const handleChangeFilter = (value) => {
    dispatch(changeFilter(value))
  }
  

  handleChangeFilter(filterTodo)
  return (
    <FilterContainer>
      <FilterTitle>Filters</FilterTitle>
      <Select
        defaultValue={filterTodo}
        // labelId="demo-simple-select-label"
        // id="demo-simple-select" 
        // onChange={handleChange}
      >
          <MenuItem onClick={()=>handleChangeFilter('atoz')} value='atoz' data-key="byABC">A to Z</MenuItem>
          <MenuItem onClick={()=>handleChangeFilter('ztoa')} value='ztoa' data-key="byABC">Z to A</MenuItem>
          <MenuItem onClick={()=>handleChangeFilter('less10')} value='less10' data-key="byPrice">Less than 10$</MenuItem>
          <MenuItem onClick={()=>handleChangeFilter('greater10')} value='greater10' data-key="byPrice">Greater than 10$</MenuItem>
          <MenuItem onClick={()=>handleChangeFilter('popular')} value='popular' data-key="byPopularity">Popular</MenuItem>
          <MenuItem onClick={()=>handleChangeFilter('notpopular')} value='notpopular' data-key="byPopularity">Not popular</MenuItem>
          <MenuItem onClick={()=>handleChangeFilter('showAll')} value='showAll' data-key="showAll">Show all</MenuItem>
      </Select>
    </FilterContainer>
  )
}
