import React from 'react'

export const PsychologistsCard = ({psychologists}) => {
    console.log(psychologists);
    console.log(psychologists.name);
  return (
    <div>
        <ul>
            <li>
                <img src="" alt="" />
            </li>
            <li>
                <div>Psychologist</div>
                <ul>
                    <li>Rating:</li>
                    <li>Price / 1 hour:</li>
                </ul>
                <h2>Name</h2>
                <ul>
                    <li>Experience:</li>
                    <li>License:</li>
                    <li>Specialization:</li>
                    <li>Initial_consultation:</li>
                </ul>
                <p>text</p>
                <button>Read more</button>
            </li>
        </ul>
    </div>
  )
}
