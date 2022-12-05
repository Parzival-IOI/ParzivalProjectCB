import React from 'react'
import "./MainNewsCard.css"

function MainNewsCard(props) {
  return (
    <div className='relative'>
        <div className='outterPicture'>
            <img src={props.really.show} alt="Latest News" />
        </div>
        <div className='black'></div>
        <div className="wordContainer">
            <p>{props.really.part}</p>
            <div>
              <a href={props.really.id}>{props.really.title}</a>
            </div>
        </div>
    </div>
  )
}

export default MainNewsCard;