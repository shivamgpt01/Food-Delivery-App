import React, { useEffect, useState } from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

const ShimmerBody = () => {
  return (
    <div className="body">
      <div className="filter">
        {/* Shimmer version of search and filter UI */}
        <div className="search shimmer">
          <input type="text" className="search-box shimmer" />
          <button className="shimmer">Search</button>
        </div>
        <button className="filter-btn shimmer">Top-Rated Restaurants</button>
        <div className="res-container">
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
    </div>
  );
};

export default ShimmerBody;
