import React from 'react'
import womanHero from '../../images/hero/women-desktop_@1x.jpg'
import womanHero2 from '../../images/hero/women-desktop_@2x.jpg'


const WomanHero = ({className=''}) => {
  return (
    <picture>
        <source srcSet={`${womanHero} 1x, ${womanHero2} 2x`} />
        <img srcSet={womanHero} alt="woman" className={className} />
    </picture>
  )
}

export default WomanHero;