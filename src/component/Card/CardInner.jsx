import React from 'react'
import './CardInner.css'

const CardInner = ({item}) => {
  return (
    <div className="covero" >
            <a href={item.id} >
              <div className="wrappero">
                <img
                  src={item.image}
                  alt="Card"
                  className="imgblocko"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="pblocko">
                <p>{item.part}</p>
              </div>
              <h2 className="h2blocko">{item.title}</h2>
              <div className="profileblocko">
                <img src={item.profile} alt="Profile" />
                <h4 className='h4o'>{item.userName}</h4>
                <p className='po'>{item.date}</p>
                <h6 className='h6o'>{item.view}</h6>
              </div>
            </a>
          </div>
  )
}

export default CardInner