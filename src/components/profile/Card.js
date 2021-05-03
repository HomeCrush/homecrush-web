import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  btn:{
    background: "#44A1A0",
    color: "#fff",
    "&:hover": {
  background: "#0D5C63",
  color: "#fff",
  margin: theme.spacing(2)
  }
}
}))

export default function Card ({ title, images }) {
  const classes = useStyles();
    return (
      <div className='card'>
        <img src={images} className="card-img-top" alt={title} />
        <div className='card_info'>
          <div className='card_title'>
          <h2>{title}</h2>
          </div>
        <Button className={classes.btn} size="small" color="primary" component={RouterLink} to="/slider">
            Edit
        </Button>
        
        </div>
      </div>
    );
  }