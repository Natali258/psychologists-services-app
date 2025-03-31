import React from 'react'
import Icons from '../../assets/sprite.svg'

export const Icon = ({id, className, size}) => {
  return (
    <svg className={className} height={size} width={size}>
      <use href={Icons+'#icon-eye-off-3'+id}></use>
    </svg>
  );
}
