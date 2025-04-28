import styled from "styled-components";

export const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 100%;
  background-color: rgba(84, 190, 150, 0.2); 
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #54be96;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;