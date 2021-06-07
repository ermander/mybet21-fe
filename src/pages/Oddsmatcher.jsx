import React, { Component } from "react";
import ModalContainer from "../components/ModalContainer";
import OddsmatcherTable from "../components/OddsmatcherTable";
class Oddsmatcher extends Component {
  state = {
    isLoading: true,
    odds: [],
  };

  fetchOdds = async () => {
    try {
      this.setState({ isLoading: true, odds: [] });
      const response = await fetch("http://localhost:3004/mybet21/oddsmatcher");
      const odds = await response.json();
      this.setState({ isLoading: false, odds: odds });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <ModalContainer />
        <OddsmatcherTable odds={this.state.odds}/>
      </div>
    );
  }
}

export default Oddsmatcher;
