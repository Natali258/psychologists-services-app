import React from 'react'
import { IconSvg } from '../Icon/IconSvg';
import { SUserBox, SUserBoxAvatar, SUserBoxName, SUserBtn, SUserContainer } from './UserMenu.styled'

export const UserMenu = () => {
  return (
    <SUserContainer>
        <SUserBox>
          <SUserBoxAvatar>
            <IconSvg id='user' size={24} />
          </SUserBoxAvatar>
          <SUserBoxName>Name</SUserBoxName>
        </SUserBox>
        <SUserBtn>Log out</SUserBtn>
    </SUserContainer>
  )
}
