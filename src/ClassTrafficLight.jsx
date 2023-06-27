import { Component } from "react";




export class ClassTrafficLight extends Component {

  constructor(props) {
    super(props);
    this.states = [
      {
        firstLight: "red",
        secondLight: "black",
        thirdLight: "black"
      },
      {
        firstLight: "black",
        secondLight: "black",
        thirdLight: "green"
      },
      {
        firstLight: "black",
        secondLight: "yellow",
        thirdLight: "black"
      }
    ];

    this.state = {
      currentIndex: 0
    };
  }

  nextState = () => {
    this.setState({ currentIndex: (this.state.currentIndex + 1 ) % this.states.length});
  };

  render() {
    const currentState = this.states[this.state.currentIndex];
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${currentState.firstLight}`}></div>
          <div className={`circle ${currentState.secondLight}`}></div>
          <div className={`circle ${currentState.thirdLight}`}></div>
        </div>
        <button onClick={this.nextState} className="next-state-button">Next State</button>
      </div>
    );
  }
}
