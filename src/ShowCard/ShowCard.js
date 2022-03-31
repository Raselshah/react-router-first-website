import React from "react";
import { Link } from "react-router-dom";

const ShowCard = ({ card }) => {
  const { name, symbol, image, current_price } = card;
  return (
    <Link to={`/coin-details/${card.id}`}>
      <div className="border-2 rounded shadow-lg shadow-violet-400/50 bg-violet-100 flex justify-between items-center p-2">
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-mono font-bold">{name}</h2>
          <p className="text-green-500 text-lg">{current_price} </p>
          <p>
            <small>{symbol}</small>
          </p>
        </div>
        <div className="photo">
          <img className="h-20 w-20 rounded-full" src={image} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default ShowCard;
