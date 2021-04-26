import React from 'react'
import './Card.css'
import { getProperty } from ''

function Card({src, title, description }) {
    return (
        <div className='card'>
            <img src={property.image} alt=""/>
            <div className='card_info'>
                <h2>{property.title}</h2>
                <h4>{property.description}</h4>                
             </div>
        </div>
    )
}

export default Card
