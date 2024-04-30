const ShimmerHeader = () => {
  return (
    <div className="header shimmer">
      <div className="logo-container">
        <div className="logo shimmer"></div>
      </div>
      <div className="nav-items shimmer">
        <ul>
          <li className="shimmer">Home</li>
          <li className="shimmer">About Us</li>
          <li className="shimmer">Contact Us</li>
          <li className="shimmer">Cart</li>
          <button className="login shimmer">Login</button>
        </ul>
      </div>
    </div>
  );
};

export default ShimmerHeader;
