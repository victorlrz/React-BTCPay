import React, { Component } from "react";
import { Loading, Title, ButtonBTC } from "./components";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="product-container">
          <Loading />
          <div>
            <Title />
            <div className="payment-container">
              <ButtonBTC />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// npm run build -> netlify deployment or command line
