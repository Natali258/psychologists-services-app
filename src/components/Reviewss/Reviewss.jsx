import React from 'react'
import { ReviewerAvatar } from '../ReviewerAvatar/ReviewerAvatar'

export const Reviewss = ({review}) => {
  return (
    <div>
        <ul>
            <li>
                <div>
                    <div>
                        <ReviewerAvatar name={review.reviewer} avatarUrl={review.avatarUrl}/>
                    </div>
                    <div>
                        <div>{review.reviewer}</div>
                        <div>{review.rating}</div>
                    </div>
                </div>
                <p>{review.comment}</p>
            </li>
        </ul>
    </div>
  )
}


