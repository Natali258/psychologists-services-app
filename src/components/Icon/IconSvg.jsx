import React from 'react'
// import Icons from '../../assets/icons/sprite.svg'
// import Icons from '../../assets/sprite.svg'
import Icons from '../../assets/icons/sprite.svg'

export const IconSvg = ({id, className, size}) => {
  return (
    <svg className={className} height={size} width={size}>
      <use href={Icons+'#icon-'+id}></use>
    </svg>
  );
}
