import React, { useEffect, useState } from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

const ShimmerBody = () => {
  return (
    <div className="body">
      <div className="filter flex">
        {/* Shimmer version of search and filter UI */}
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black" />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg">
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-4 bg-gray-100 rounded-lg">
            Top-Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {/* Shimmer versions of RestaurantCard */}
        <ShimmerRestaurantCard />
        <ShimmerRestaurantCard />
        <ShimmerRestaurantCard />
        <ShimmerRestaurantCard />
        <ShimmerRestaurantCard />
        <ShimmerRestaurantCard />
        <ShimmerRestaurantCard />
        <ShimmerRestaurantCard />
        <ShimmerRestaurantCard />
        <ShimmerRestaurantCard />
        <ShimmerRestaurantCard />
        <ShimmerRestaurantCard />
      </div>
    </div>
  );
};

export default ShimmerBody;
