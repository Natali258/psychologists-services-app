import React from 'react'
import { Image } from "../../components";
import { Icon } from "../../components/Icon/Icon";

export const MainPhoto = () => {
  return (
    <div>
    <Image.WomanHero/>
    <div>
      <Icon name='people-icon' size='20'/>
    </div>
    <div>
    <Icon name='question-mark'size='17'/>
    </div>
    <div>
        <div>
            <Icon name='check' size='17'/>
        </div>
    </div>
    </div>
  )
}
