import React, { useState } from 'react'
import './Banner.css';
import '../../App.css';
import { Button } from "@material-ui/core"
import Search from './Search';


function Banner() {
  const [showSearch, setShowSearch] = useState (false);
  
  return (
    <div className='banner'>
    <div className='banner_search'>
    {showSearch && <Search />}
        <Button onClick={() =>
        setShowSearch(!showSearch)}
        className='banner_searchButton'
        variant='outline'> {showSearch ? "Hide" : "Search Dates"}
        </Button>
    </div>


    <div className='banner-container'>
      <img className='home_backgroud'/>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <Button 
         variant='outlined'>Explore the world
          </Button>
    </div>
  </div>
  );
}

export default Banner;