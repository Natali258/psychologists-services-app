import React from 'react'
import { Avatar, AvatarImage } from './ReviewerAvatar.styled';




export const ReviewerAvatar = ({ name, avatarUrl }) => {
    if (avatarUrl) {
        return <AvatarImage src={avatarUrl} alt={name} />;
      }
    
      const firstLetter = name ? name[0].toUpperCase() : '?';
      
      return <Avatar>{firstLetter}</Avatar>;
}
