import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { shuffle, getRandomColor } from "./helpers";

class App extends Component {
  state = {
    cards: [],
    firstClicked: { id: null, col: null },
    secondClicked: { id: null, col: null },
    cnt: 0,
    gameSize: 4
  };

  initCards = () => {
    // set game size
    // create 8 cards with different color
    let cards = Array((this.state.gameSize * this.state.gameSize) / 2)
      .fill()
      .map(el => ({
        col: getRandomColor()
      }));
    // duplicate cards
    cards = [...cards, ...cards];
    // shuffle Cards
    shuffle(cards);
    // add unique index
    cards = cards.map((el, index) => ({
      id: index,
      col: el.col
    }));
    this.setState({ cards });
  };

  areColorsEqual = () => {
    return (
      this.state.firstClicked.col == this.state.secondClicked.col &&
      this.state.firstClicked.id != this.state.secondClicked.id
    );
  };

  // if cards have same col set card bgcol to wrapper bgcol => card 'invisible'
  removeCard = () => {
    let newCards = [...this.state.cards];
    if (this.areColorsEqual()) {
      // console.log("same colors!");
      newCards[this.state.firstClicked.id].col = "#272B30";
      newCards[this.state.secondClicked.id].col = "#272B30";
      this.setState({ cards: newCards });
    }
  };

  // picks a card and evaluates: 'removes' if eq col
  evalCards = ({ id, col }) => {
    if (this.state.cnt % 2 == 0) {
      this.setState({ firstClicked: { id, col } }, this.removeCard);
    } else {
      this.setState({ secondClicked: { id, col } }, this.removeCard);
    }
    this.setState({ cnt: this.state.cnt + 1 });
  };

  setSize = size => {
    console.log(size);
    // reset state
    this.setState(
      {
        cards: [],
        firstClicked: { id: null, col: null },
        secondClicked: { id: null, col: null },
        cnt: 0,
        gameSize: size
      },
      this.initCards
    );
  };

  componentDidMount() {
    this.initCards();
  }
  render() {
    return (
      <div className="">
        <Navbar setSize={this.setSize} />
        <Main
          cards={this.state.cards}
          evalCards={this.evalCards}
          size={this.state.gameSize}
        />
      </div>
    );
  }
}

export default App;
