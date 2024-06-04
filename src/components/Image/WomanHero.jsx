import React from 'react'
import womanHero from '../../images/hero/women-desktop_@1x.jpg'


const WomanHero = ({className=''}) => {
  return (
    <picture>
        {/* <source srcSet="../../images/hero/women-desktop_@2x.jpg 2x"/> */}
        <img src={womanHero} alt="woman" className={className} />
    </picture>
  )
}

export default WomanHero;