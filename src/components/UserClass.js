import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 1,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name} </h2>
        <h3>Location: {this.props.location}</h3>
        <h4>Contact:@testemail.com</h4>
        <h4>Count1: {this.state.count1}</h4>
        <button
          onClick={() => {
            this.setState({ count1: this.state.count1 + 1 });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}
export default UserClass;
