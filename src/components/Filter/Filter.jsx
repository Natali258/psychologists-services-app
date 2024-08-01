import React from 'react'
import { FilterBtn, FilterContainer, FilterIcon, FilterTitle, FilterUl } from './Filter.styled'
import { Icon } from '../Icon/Icon'

export const Filter = () => {
  return (
    <FilterContainer>
      <FilterTitle>Filters</FilterTitle>
      <FilterBtn>A to Z
        <FilterIcon>
          <Icon name='icon-VectorNew2' size='17' fill='rgba(251, 251, 251, 1)'/>
        </FilterIcon>
        {/* <Icon name='icon-VectorNew2' size='17' fill='rgba(251, 251, 251, 1)'/> */}
      </FilterBtn>
      <FilterUl>
        <li>A to Z</li>
        <li>Z to A</li>
        <li>Less than 10$</li>
        <li>Greater than 10$</li>
        <li>Popular</li>
        <li>Not popular</li>
        <li>Show all</li>
        </FilterUl>
    </FilterContainer>
  )
}
