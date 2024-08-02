import React from 'react'
import { FilterBtn, FilterContainer, FilterIcon, FilterTitle, FilterUl } from './Filter.styled'
import { Icon } from '../Icon/Icon'
import { MenuItem, Select } from '@mui/material'
import { SelectAll } from '@mui/icons-material'


export const Filter = () => {
//  const options = [
//   {value:'byABC', lable:'A to Z'},
//   {value:'byABC', lable:'Z to A'},
//   {value:'byPrice', lable:'Less than 10$'},
//   {value:'byPrice', lable:'Greater than 10$'},
//   {value:'byPopularity', lable:'Popular'},
//   {value:'byPopularity', lable:'Not popular'},
//   {value:'showAll', lable:'Show all'}
//  ]
//  console.log(options);
 
  return (
    <FilterContainer>
      <FilterTitle>Filters</FilterTitle>
      {/* <FilterBtn>A to Z
        <FilterIcon>
          <Icon name='icon-VectorNew2' size='17' fill='rgba(251, 251, 251, 1)'/>
        </FilterIcon>
      </FilterBtn>
      <FilterUl>
        <li>A to Z</li>
        <li>Z to A</li>
        <li>Less than 10$</li>
        <li>Greater than 10$</li>
        <li>Popular</li>
        <li>Not popular</li>
        <li>Show all</li>
        </FilterUl> */}

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
