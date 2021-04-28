import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getProperties, like, reject } from "../Services/PropertiesService";
import TinderCard from "react-tinder-card"
import './SearchResult.css'

function SearchResult() {

    const [properties, setProperties] = useState([]);

    const [currentProperty, setCurrentProperty] = useState(0); //es 0 porque este array quiero q me muestra la priemra properry
   
    useEffect(() => {
        getProperties().then((properties) => setProperties(properties));
    }, []);

    const swiped = (id, dir) => {
        
        //hacer el reject
        if(dir === "left"){
           reject(id).then(() => setCurrentProperty(currentProperty + 1))
        }
        else {
           like(id).then(() =>  setCurrentProperty((prevState) => prevState + 1 ))
        }
     }

    if(!properties.length){
        return "Loading...";
    }
   const property = properties[currentProperty]

    return (
        <div className='searchResult'>
            <div className='searchResult_cardContainer'>
                
                    <TinderCard
                    className='swipe'
                    key={property.title}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(property.id, dir)
                    }
                    >
                        <div 
                        style={{ backgroundImage: `url(${property.images})` }}
                        className='searchResultCard'
                        >
                            <h3>{property.title}</h3>
                          
                        </div>

                    </TinderCard>
            </div>
        </div>
    )
}

export default SearchResult
