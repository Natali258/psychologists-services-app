import React from 'react'
import { ReviewerAvatar } from '../ReviewerAvatar/ReviewerAvatar'
import { SReviewer, SReviewsContainer, SReviewsRating, SReviewText } from './Reviewss.styled'
import { IconSvg } from '../Icon/IconSvg'

export const Reviewss = ({review}) => {
  return (
    <div>
        <ul>
            <li>
                <SReviewsContainer>
                    <div>
                        <ReviewerAvatar name={review.reviewer} avatarUrl={review.avatarUrl}/>
                    </div>
                    <SReviewer>
                        <div>{review.reviewer}</div>
                        <SReviewsRating>
                            <IconSvg id='star' size={20} />
                            {review.rating}
                        </SReviewsRating>
                    </SReviewer>
                </SReviewsContainer>
                <SReviewText>{review.comment}</SReviewText>
            </li>
        </ul>
    </div>
  )
}


