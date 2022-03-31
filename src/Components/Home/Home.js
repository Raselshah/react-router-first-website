import React from "react";

const Home = () => {
  return (
    <div className="h-[60vh]">
      <div className=" h-[60vh] flex flex-col justify-center items-center">
        <h3 className="text-6xl">Get Your Meal</h3>
       <div className="flex flex-row">
       <button className="border-2 px-4 bg-sky-500/75 rounded text-white mt-4 text-lg">
          See Food
        </button>
        <button className="border-2 px-4 bg-sky-500/75 rounded text-white mt-4 text-lg">
          Order Food
        </button>
       </div>
      </div>
    </div>
  );
};

export default Home;
