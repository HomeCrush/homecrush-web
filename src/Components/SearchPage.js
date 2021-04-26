import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
           <div
           className='searchPage_info'> 
            <p> Here should be the range of days</p>
            <h1> Stays </h1>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
           </div>
           <SearchResult
            img= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
            location= "Private room in center of London"
            name= "Stay at this spacious Edwardian House"
            description= "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
            />

        </div>
    )
}

export default SearchPage
