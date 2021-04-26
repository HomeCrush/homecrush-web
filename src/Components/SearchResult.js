import React, { useState } from 'react'
import TinderCard from "react-tinder-card"
import './SearchResult.css'


function SearchResult() {
    const [properties, setProperties] = useState([
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",
            location: "Private room in center of London",
            name:"Stay at this spacious Edwardian House",
            description: "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",

        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",
            location: "Private room in center of London",
            name:"Stay at this spacious Edwardian House",
            description: "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",
            location: "Private room in center of London",
            name:"Stay at this spacious Edwardian House",
            description: "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
        }
    ]);

    const swiped = (direction, titleToDelete) => {
       console.log("removing" + titleToDelete)
    }

    const outOfFrame = (title) => {
        console.log(title + 'left the screen')
    }

    return (
        <div className='searchResult'>
            <div className='searchResult_cardContainer'>
                {properties.map((property)=> (
                    <TinderCard
                    className='swipe'
                    key={property.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, property.name)}
                    onCardLeftScreen={()=> outOfFrame(property.name)}
                    >
                        <div 
                        style={{ backgroundImage: `url(${property.url})` }}
                        className='searchResultCard'
                        >
                            <h3>{property.name}</h3>
                            <h5>{property.location}</h5>
                            <h6>{property.description}</h6>
                          
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default SearchResult
