
import { signOut } from 'firebase/auth';
import { IconSvg } from '../Icon/IconSvg';
import { SUserBox, SUserBoxAvatar, SUserBoxName, SUserBtn, SUserContainer } from './UserMenu.styled'
import { auth } from '../../services/FirebaseApp';


export const UserMenu = ({userName}) => {
  const handleExit = async() => {
    try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
  }
  return (
    <SUserContainer>
        <SUserBox>
          <SUserBoxAvatar>
            <IconSvg id='user' size={24} />
          </SUserBoxAvatar>
          <SUserBoxName>{userName}</SUserBoxName>
        </SUserBox>
        <SUserBtn onClick={handleExit}>Log out</SUserBtn>
    </SUserContainer>
  )
}
