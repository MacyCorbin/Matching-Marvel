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
  
  
    // Map over this.state.cards and render a card component for each card object
    render() {
      return (
        <div className="contents">

        {/* Header.js component */}
          <Header score={this.state.score} highscore={this.state.highscore}>Marvel Match</Header>
          
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