import React, { useState } from 'react'
import './Banner.css';
import '../../App.css';
import { Button } from "@material-ui/core"
import Search from './Search';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btn:{
    background: "#44A1A0",
    margin: theme.spacing(1),
    color: "#fff",
    "&:hover": {
    background: "#0D5C63",
    color: "#fff",
  }
}
}))

function Banner() {
  const classes = useStyles();
  const [showSearch, setShowSearch] = useState (false);
  
  return (
    <div className='banner'>
    <div className='banner_search'>
    </div>


    <div className='banner-container'>
      <img className='home_backgroud'/>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <Button 
         variant='outlined'
         className={classes.btn} 
         size="small" color="primary"
         component={RouterLink} to="/signup">Explore the world
          </Button>
    </div>
  </div>
  );
}

export default Banner;