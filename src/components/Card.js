import React from 'react'
import './Card.css'
/*import { getProperty } from ''*/

function Card({src, title, description }) {
    return (
        <div className='card'>
            <img src={src} alt=""/>
            <div className='card_info'>
                <h2>{title}</h2>
                <h4>{description}</h4>                
             </div>
        </div>
    )
}

export default Card
