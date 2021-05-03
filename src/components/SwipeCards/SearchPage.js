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
           </div>
           <SearchResult
            />

        </div>
    )
}

export default SearchPage
