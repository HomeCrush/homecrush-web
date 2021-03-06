import React, { useState } from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';

function Search() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

      function handleSelect(ranges) {
          setStartDate(ranges.selection.startDate);
          setEndDate(ranges.selection.endDate);
      }

    return (
        <div className='search'>
             <DateRange ranges={[selectionRange]} onChange={handleSelect}/>
             <h2>
                 Number of beds <PeopleIcon />
             </h2>
             <input min={0}
             defaultValue={2}
             type="number" />
             <Button>Search on HomeCrush</Button>
           
        </div>
    )
}

export default Search
