const ShimmerRestaurantCard = () => {
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <div className="res-logo shimmer"></div>
      <h3 className="shimmer">Restaurant Name</h3>
      <h4 className="shimmer">Rating</h4>
      <h4 className="shimmer">SLA</h4>
    </div>
  );
};

export default ShimmerRestaurantCard;
