import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Card from "./Card";
import './Card.css'

const Cards = ({ properties}) => {
  const { user } = useContext(UserContext)

  if(!user){
    return "loading..."
  }
  
  return (
    <div className="Cards">
      {properties.map((properties) => { 

        if (properties.owner === user.id) {
        return(        
        <Card {...properties} key={properties.id} />
      )
        }
        return null
      })}
    </div>
  );
};

export default Cards;