import React from 'react'
import ImageSlider from './Carrusel';
import { SliderData } from '../Components/profile/SliderData'


function Slider() {
    return (
        <div>
            <ImageSlider slides={SliderData} />;
}
        </div>
    )
}

export default Slider
