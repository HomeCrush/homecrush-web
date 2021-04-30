import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
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
            <div className='banner_info'>
                <h1>Get out and enjoy the world!</h1>
                <h5>
                    Plan a different kind of
                    getaway to uncover the hidden gems that the world offer to you.
                </h5>
                <Button 
                variant='outlined'>Explore the world
                </Button>
            </div>
        </div>
    )
}

export default Banner
