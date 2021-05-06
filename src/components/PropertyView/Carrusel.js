import React, { useState } from 'react';
import { SliderData } from './SliderData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import PropertyCard from './PropertyCard'
import './Carrusel.css'
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import IconLabelButtons from './Bnt'


const ImageSlider = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Card>
      <CardActionArea >
      <ArrowBackIosIcon  className='left-arrow' onClick={prevSlide} />
      <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className="sliderImage" style={{
                background: `url('${slide.image}')`
              }}>
              </div>
            
            )}
          </div>
        );
      })}
      </CardActionArea>
      <CardActions>
     < IconLabelButtons />
      </CardActions>
    </Card >
        
  );
};

export default ImageSlider;