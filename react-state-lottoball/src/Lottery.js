import React, { Component } from "react";
import "./Lottery.css";
import LottoBall from "./LottoBall";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    // Array.from makes an array with empty slots (null) based off the length we pass in
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }

  // create a new array, for each current number on the ball, update it to be a newly generated number from 0 to 40
  generate() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        {/* iterate over the numbers of balls using `map()`: for each item return a lotto ball with a number on it */}
        <div>
          {this.state.nums.map((n) => (
            <LottoBall num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
