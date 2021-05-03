import React from "react";
import Card from "./Card";
import './Card.css'

const Cards = ({ properties}) => {
  return (
    <div className="Cards">
      {properties.map((properties) => (
        <Card {...properties} key={properties.id} />
      ))}
    </div>
  );
};

export default Cards;