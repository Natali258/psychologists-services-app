import React from 'react'
import { SUserContainer } from './UserMenu.styled'

export const UserMenu = () => {
  return (
    <SUserContainer>
        <div>
            <div>Avatar</div>
            <div>Name</div>
            <button>Log out</button>
        </div>
    </SUserContainer>
  )
}
