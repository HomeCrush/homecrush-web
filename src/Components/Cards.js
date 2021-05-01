import React from "react";
import PropertyCard from "./Card";

const Cards = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map((card) => (
        <PropertyCard {...card} key={card.id} />
      ))}
    </div>
  );
};

export default Cards;