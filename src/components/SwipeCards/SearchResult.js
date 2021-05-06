import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getProperties, like, reject } from "../../services/PropertiesService";
import TinderCard from "react-tinder-card"
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import "./SwipeButtons.css";
import './SearchResult.css'

function SearchResult() {

    const [properties, setProperties] = useState([]);

    const [currentProperty, setCurrentProperty] = useState(0); //es 0 porque este array quiero q me muestra la priemra properry
   
    useEffect(() => {
        getProperties().then((properties) => setProperties(properties));
    }, []);

    const swiped = (property, dir) => {

        if(dir === "left"){
           /*reject(id).then(( aqui va todo lo de abajo currentProperty) => setCurrentProperty(currentProperty + 1))*/
            reject(property).then(() => {
                if(currentProperty < properties.length - 1) {
                    setCurrentProperty(currentProperty + 1);
                } else {
                    setCurrentProperty(0);
                }
            })        
        }
        else {
           /*like(id).then(() =>  setCurrentProperty((prevState) => prevState + 1 ))*/

            like(property).then(() => {
                if(currentProperty < properties.length - 1) {
                    setCurrentProperty(currentProperty + 1);
                     } else {
                    setCurrentProperty(0);
            }  
        })
        }
     }

    if(!properties.length){
        return "Loading...";
    }
   const property = properties[currentProperty]
 //alert
    if(//propiedaddos )
    
    return (
      <div className="searchResult">
        <div className="searchResult_cardContainer">
          <TinderCard
            className="swipe"
            key={property.title}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(property, dir)}
          >
            <div
              style={{ backgroundImage: `url(${property.images})` }}
              className="searchResultCard"
            >
              <h3>{property.title}</h3>
            </div>
          </TinderCard>
        </div>
        <div className="swipeButtons">
          <IconButton className="swipeButtons_left">
            <CloseIcon onClick={(dir) => swiped(property, dir)} />
          </IconButton>
          <IconButton className="swipeButtons_right">
            <FavoriteIcon onClick={(dir) => swiped(property, dir)} />
          </IconButton>
        </div>
      </div>
    );
}

export default SearchResult
