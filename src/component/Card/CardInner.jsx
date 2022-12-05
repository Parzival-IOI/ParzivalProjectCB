import React from 'react'
import './CardInner.css'

const CardInner = ({item}) => {
  return (
    <div className="cover">
            <a href={item.id} >
              <div className="wrapper">
                <img
                  src={item.image}
                  alt="Card"
                  className="imgblock"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="pblock">
                <p>{item.part}</p>
              </div>
              <h2 className="h2block">{item.title}</h2>
              <div className="profileblock">
                <img src={item.profile} alt="Profile" />
                <h4>{item.userName}</h4>
                <p>{item.date}</p>
                <h6>{item.view}</h6>
              </div>
            </a>
          </div>
  )
}

export default CardInner