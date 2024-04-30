const ShimmerRestaurantCard = () => {
  return (
    <div
      className="shimmer-res-card shimmer"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <div className="res-logo shimmer"></div>
      <h3 className="shimmer">Restaurant Name</h3>
      <h4 className="shimmer">Rating</h4>
      <h4 className="shimmer">SLA</h4>
    </div>
  );
};

export default ShimmerRestaurantCard;
