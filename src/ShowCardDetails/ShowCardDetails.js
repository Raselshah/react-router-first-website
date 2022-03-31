import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";

const ShowCardDetails = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
    setLoading(false);
  }, [id]);
  const {
    community_score,
    sentiment_votes_down_percentage,
    sentiment_votes_up_percentage,
    country_origin,
    developer_score,
    image,
  } = details;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="h-screen max-w-7xl px-20 m-auto">
          <div className="h-screen grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            <div className="flex items-start flex-col">
              <h2 className="border-b-4 border-indigo-400">General Info</h2>
              <p>community_score : {community_score}</p>
              <p>
                sentiment_votes_down_percentage :{" "}
                {sentiment_votes_down_percentage}
              </p>
              <p>
                sentiment_votes_up_percentage : {sentiment_votes_up_percentage}
              </p>
              <p>
                country_origin :{" "}
                {country_origin ? country_origin : "Not available"}
              </p>
              <p>developer_score : {developer_score}</p>
            </div>
            <div className="m-auto">
              <img src={image?.large} alt="coin" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowCardDetails;
