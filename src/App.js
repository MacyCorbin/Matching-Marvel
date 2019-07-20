import React, { Component } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import cards from "./cards.json";
import "./App.css";


class App extends Component {

    // Setting this.state.cards to the cards json array
    state = {
      cards,
      score: 0,
      highscore: 0
    };

    // The function when the game ends
    gameOver = () => {

      // if you get all the matches correct you win!
      if (this.state.score === 12) {
        this.setState({ highscore: this.state.score }, function () {
          console.log(this.state.highscore);
          alert(`You Won! Click to replay! \nscore:  ${this.state.highscore}`);
        });
        this.state.cards.forEach(card => {
          card.count = 0;
        });

        // score resets
        this.setState({ score: 0 });
        this.setState({ highscore: 0 });
        return true;
      } else {
        this.setState({ highscore: this.state.score }, function () {
          console.log(this.state.highscore);
        });
        this.state.cards.forEach(card => {
          card.count = 0;
        });
        alert(`Game Over \nscore:  ${this.state.score}`);
  
        this.setState({ score: 0 });
        return true;
      }
    }
  
  
    // This is a click listener for which cards have been selected
    clickCount = id => {
      this.state.cards.find((o, i) => {
        if (o.id === id) {
          if (cards[i].count === 0) {
            cards[i].count = cards[i].count + 1;
            this.setState({ score: this.state.score + 1 }, function () {
              console.log(this.state.score);
            });
            this.state.cards.sort(() => Math.random() - 0.5)
            return true;
          }
          else if (cards[i].count === 8) {
  
            this.setState({ score: this.state.score }, function () {
              console.log("you won!");
            });
            this.state.cards.sort(() => Math.random() - 0.5)
            return true;
          }
          else {
            this.gameOver();
  
          }
  
        }
      });
    }
  
  
    // Map over this.state.cards and render a card component for each card object
    render() {
      return (
        <div className="contents">

        {/* Header.js component */}
          <Header score={this.state.score} highscore={this.state.highscore}>Super Sort</Header>
          
          {/* container class creates styling for the rows of cards */}
          <div className="container">
          
            {this.state.cards.map(card => (

              //Card.js component 
              <Card
                clickCount={this.clickCount}
                id={card.id}
                key={card.id}
                image={card.image}
              />

            ))}
          </div>

          {/* Footer.js component */}
          <Footer />
        </div>
      );
    }
  }
  export default App;