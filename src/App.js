import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import Jumbotron from "./components/jumbotron";
const _ = require("lodash");

class App extends Component {
  state = {
    counters: [
      {
        id: 0,
        image: "https://picsum.photos/300/300/?image=206",
        clicked: false
      },
      {
        id: 1,
        image: "https://picsum.photos/300/300/?image=696",
        clicked: false
      },
      {
        id: 2,
        image: "https://picsum.photos/300/300/?image=552",
        clicked: false
      },
      {
        id: 3,
        image: "https://picsum.photos/300/300/?image=197",
        clicked: false
      },
      {
        id: 4,
        image: "https://picsum.photos/300/300/?image=865",
        clicked: false
      },
      {
        id: 5,
        image: "https://picsum.photos/300/300/?image=300",
        clicked: false
      },
      {
        id: 6,
        image: "https://picsum.photos/300/300/?image=687",
        clicked: false
      },
      {
        id: 7,
        image: "https://picsum.photos/300/300/?image=320",
        clicked: false
      },
      {
        id: 8,
        image: "https://picsum.photos/300/300/?image=516",
        clicked: false
      }
    ],
    score: 0,
    highScore: 0,
    message: "Click an image to begin!"
  };

  handleOnClick = identifier => {
    console.log("------- who is clicked? ", identifier);
    const counter = [...this.state.counters];
    const { score, highScore } = this.state;

    counter.forEach(item => {
      if (item.id === identifier) {
        if (item.clicked === false) {
          item.clicked = true;
          this.setState({
            score: this.state.score + 1,
            counters: item,
            message: "You Guessed Correctly!"
          });
          if (highScore <= score) {
            this.setState({
              highScore: score + 1
            });
          }
        } else {
          this.lose();
        }
      }
    });

    this.setState({
      counters: _.shuffle(this.state.counters)
    });
  };

  lose() {
    const { counters } = this.state;
    counters.map(guesses => {
      guesses.clicked = false;
      return guesses;
    });
    this.setState({
      score: 0,
      message: "Aww snap!  That's a wrong guess.",
      counters
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          score={this.state.score}
          highScore={this.state.highScore}
          message={this.state.message}
        />
        <Jumbotron />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onHandleImage={this.handleOnClick}
            key={this.state.counters.id}
          />
        </main>
        <footer className="pt-4 my-md-5 pt-md-5 border-top centered">
          Copyright 2018
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
