import React from 'react'
import {FilterContainer, FilterTitle} from './Filter.styled'
import { MenuItem, Select } from '@mui/material'


export const Filter = () => {
 
  return (
    <FilterContainer>
      <FilterTitle>Filters</FilterTitle>
      <Select
        defaultValue='atoz'
        // labelId="demo-simple-select-label"
        // id="demo-simple-select"
        // onChange={handleChange}
      >
          <MenuItem value='atoz'>A to Z</MenuItem>
          <MenuItem value='ztoa'>Z to A</MenuItem>
          <MenuItem value='less10'>Less than 10$</MenuItem>
          <MenuItem value='greater10'>Greater than 10$</MenuItem>
          <MenuItem value='popular'>Popular</MenuItem>
          <MenuItem value='notpopular'>Not popular</MenuItem>
          <MenuItem value='showAll'>Show all</MenuItem>
      </Select>
    </FilterContainer>
  )
}
