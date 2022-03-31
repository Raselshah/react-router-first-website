import React, { useEffect, useState } from "react";
import ShowCard from "../../ShowCard/ShowCard";
import Spinner from "../Spinner/Spinner";

const ShowMeal = () => {
  const [meals, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setMeal(data));
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="grid max-w-7xl m-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 px-20">
          {meals.map((meal) => (
            <ShowCard key={meal.id} card={meal}></ShowCard>
          ))}
        </div>
      )}
    </>
  );
};

export default ShowMeal;
