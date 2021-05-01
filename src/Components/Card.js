/*import React, { useState, useEffect, } from 'react'
import { useParams } from "react-router-dom";
import './Card.css'
import { getProperties } from "../Services/PropertiesService";



function Card({src, title}) {
    const [properties, setProperties] = useState();
    const [currentProperty, setCurrentProperty] = useState(0); 
   const { id } = useParams();

useEffect(() => {
    getProperties(id).then((properties) => setProperties(properties));
}, [id]); //me tiene que dar las propiedades que yo haya creado*/
/*const property = properties[currentProperty]
    return (
        <div className='card'>
            <img src={property.images} alt=""/>
            <div className='card_info'>
                <h2>{property.title}</h2>           
             </div>
        </div>
    )
}

export default Card*/

export default function PropertyCard({ title, image }) {
    return (
      <div className='card'>
          <img src={ image } alt=""/>
          <div className='card_info'>
              <h2>{title}</h2>           
           </div>
      </div>
    );
  }
