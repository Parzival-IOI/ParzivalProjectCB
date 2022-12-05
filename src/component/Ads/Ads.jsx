import React from 'react'
import Addss from './info.js'
import "./Ads.css"

function Ads() {
  return (
    <section className='Ads'>
        <div className='slogen'>
            <h3>ការផ្សាយពាណិជ្ជកម្មរបស់យើង</h3>
        </div>
        {Addss.map((items) => {
            return (
                <a href={items.name} key={items.id}>
                    <img src={items.address} alt="Sponsor" />
                </a>
            )
        })}
    </section>
  )
}

export default Ads;