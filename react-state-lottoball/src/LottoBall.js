// LottoBall component is for generating individual lotto ball

import React, { Component } from "react";
import "./LottoBall.css";

class LottoBall extends Component {
  render() {
    return <div className="LottoBall">{this.props.num}</div>;
  }
}

export default LottoBall;

// Functional component:

// export default ({num} => (
//   <div className='LottoBall'>{num}</div>
// ))
