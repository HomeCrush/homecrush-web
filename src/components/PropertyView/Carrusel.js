import React, { useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Carrusel.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import IconLabelButtons from './Bnt'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import SimpleTooltips from './Options'


const ImageSlider = ({title, location, description, images, amenities, rules, beds}) => {
  const [current, setCurrent] = useState(0);
  const length = images?.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  


  return (
    <Card>
      <CardActionArea>
        <ArrowBackIosIcon className="left-arrow" onClick={prevSlide} />
        <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide} />
        {images.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div
                  className="sliderImage"
                  style={{
                    background: `url('${slide}')`,
                  }}
                ></div>
              )}
            </div>
          );
        })}
      </CardActionArea>
      <CardActions>
        <IconLabelButtons />
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h6">
          {title}
        </Typography>
        <Typography variant="subtitle2" component="h6">
          {location}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <SimpleTooltips amenities={amenities} rules={rules} beds={beds}/>
    </Card>
  );
};

export default ImageSlider;                                     