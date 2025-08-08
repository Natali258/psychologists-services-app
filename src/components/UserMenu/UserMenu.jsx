
import { IconSvg } from '../Icon/IconSvg';
import { SUserBox, SUserBoxAvatar, SUserBoxName, SUserBtn, SUserContainer } from './UserMenu.styled'


export const UserMenu = ({userName}) => {
  
//  const {name, email} = userData;
//   console.log(name);

  return (
    <SUserContainer>
        <SUserBox>
          <SUserBoxAvatar>
            <IconSvg id='user' size={24} />
          </SUserBoxAvatar>
          <SUserBoxName>{userName}</SUserBoxName>
        </SUserBox>
        <SUserBtn>Log out</SUserBtn>
    </SUserContainer>
  )
}
