import React from 'react'
import ImageSlider from './Carrusel';
import { SliderData } from './SliderData';
import SimpleTooltips from './Options'


function Slider() {
    return (
        <div className="Slider">
            <ImageSlider slides={SliderData} />
            <SimpleTooltips />
        </div>
    )
}

export default Slider
