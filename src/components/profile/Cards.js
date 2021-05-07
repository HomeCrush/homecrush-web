import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import CardProperty from "./Card";
import './Card.css'

const Cards = ({ properties }) => {
  const { user } = useContext(UserContext)

  if(!user){
    return "loading..."
  }
  
  return (
    <div className="Cards">
      {properties.map((properties) => { 

       if (properties.owner === user.id) {
          return <CardProperty {...properties} key={properties.id} />
      }
          return null
      })
      }
    </div>
  );
};

export default Cards;