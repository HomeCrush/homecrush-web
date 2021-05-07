import React from 'react'
import ImageSlider from './Carrusel';
import { SliderData } from './SliderData';



function Slider() {
    return (
        <div>
            <ImageSlider slides={SliderData} />

        </div>
    )
}

export default Slider
