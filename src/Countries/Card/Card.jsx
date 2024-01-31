import React from "react";
import "./Card.css";

export default function Card({ cardData }) {
  return (
    <div className="countryCard">
      <img
        src={cardData.flags.png}
        alt={cardData.flags.alt}
        className="image"
      />
      <p className="title">{cardData.name.common}</p>
    </div>
  );
}
