import React from "react";
import MatchCard from "./MatchCard";
import '../profile/Card.css'
import './MatchCard.css'

const MatchCards = ({ properties }) => {
  return (
    <div className="Match_Cards">
      {properties.map((properties) => (
        <MatchCard {...properties} key={properties.id} />
      ))}
    </div>
  );
};

export default MatchCards;