import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="flex justify-around h-20 text-white items-center bg-indigo-500">
      <div className="logo">
        <h4 className="text-2xl">RichFood</h4>
      </div>
      <div className="menu">
        <nav className="">
          <CustomLink className="mx-6 hover:text-slate-400 text-lg" to="/home">
            Home
          </CustomLink>
          <CustomLink
            className="mx-6 hover:text-slate-400 text-lg"
            to="/showMeal"
          >
            Meals
          </CustomLink>
          <CustomLink className="mx-6 hover:text-slate-400 text-lg" to="/order">
            Order
          </CustomLink>
          <CustomLink
            className="mx-6 hover:text-slate-400 text-lg"
            to="/contact"
          >
            Contact
          </CustomLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
