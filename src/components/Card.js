import React, { Component } from "react";

export default class Card extends Component {
  handleClick = () => {
    this.props.evalCards(this.props.card);
  };
  render() {
    const { card, size } = this.props;
    return (
      <div
        className="mt-2 "
        style={{ flex: `0 0 ${100 / size}%`, maxWidth: `${100 / size}%` }}
      >
        <div
          onClick={this.handleClick}
          style={{ backgroundColor: `${card.col}` }}
          className="card-style"
        >
          {/* {props.card.col} */}
        </div>
      </div>
    );
  }
}
