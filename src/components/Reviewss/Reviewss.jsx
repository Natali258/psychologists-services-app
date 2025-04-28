import React from 'react'

export const Reviewss = ({review}) => {
    console.log(review);
    
  return (
    <div>
        <ul>
            <li>
                <div>
                    <div>img</div>
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


