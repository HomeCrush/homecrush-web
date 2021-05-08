import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProperty } from '../../services/PropertiesService';
import ImageSlider from './Carrusel';



function Slider() {
    const [property, setProperty] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        getProperty(id).then((property) => {
            setProperty(property);
      });
    }, [id]);
if (!property){
    return "loading"
}

    return (
        <div className="Slider">
            <ImageSlider {...property} />
        </div>
    )
}

export default Slider
