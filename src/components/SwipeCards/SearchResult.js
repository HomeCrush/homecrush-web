import React, { useEffect, useState } from 'react'
import { getProperties, like, reject } from "../../services/PropertiesService";
import TinderCard from "react-tinder-card"
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import "./SwipeButtons.css";
import './SearchResult.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SearchPage.css"

function SearchResult() {

    const [properties, setProperties] = useState([]);

    const [currentProperty, setCurrentProperty] = useState(0);
    
   //es 0 porque este array quiero q me muestra la priemra properry
   
    useEffect(() => {
        getProperties().then((properties) => setProperties(properties));
    }, []);

    const swiped = (property, dir) => {

        if(dir === "left"){
            reject(property).then(() => {
                if(currentProperty < properties.length - 1) {
                    setCurrentProperty(currentProperty + 1);
                } else {
                    setCurrentProperty(0);
                }
            })        
        }
        else {
            like(property).then((response) => {
                if (response.status === "match") {
                  toast.success("🔥You have a Crush!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                }
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
    
    return (
      <div className="searchResult">
        <ToastContainer />
        <div className="searchResult_cardContainer">
          <TinderCard
            className="swipe"
            key={property.title}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(property, dir)}
          >
            <div
              style={{ backgroundImage: `url(${property.images[0]})` }}
              className="searchResultCard"
            >
              <h3>{property.title}</h3>
            </div>
          </TinderCard>
        </div>
        <div className="swipeButtons">
          <IconButton className="swipeButtons_left">
            <CloseIcon onClick={() => swiped(property, "left")} />
          </IconButton>
          <IconButton className="swipeButtons_right">
            <FavoriteIcon onClick={() => swiped(property, "right")} />
          </IconButton>
        </div>
      </div>
    );
}

export default SearchResult
