import React from "react";
import Header from "./Header.js";
import Inventory from "./Inventory.js";
import Order from "./Order.js";
import sampleFishes from "../sample-fishes.js";
import Fish from "./Fish.js";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes: fishes
    });
  };

  loadFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish key={key} details={this.state.fishes[key]} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadFishes={this.loadFishes} />
      </div>
    );
  }
}

export default App;
