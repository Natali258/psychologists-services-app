import React from 'react'
import Icons from '../../assets/icons/sprite.svg'

export const IconSvg = ({id, className, size, style}) => {
  return (
    <svg className={className} height={size} width={size} style={style}>
      <use href={Icons+'#icon-'+id}></use>
    </svg>
  );
}
