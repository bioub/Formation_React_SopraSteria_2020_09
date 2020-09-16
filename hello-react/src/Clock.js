import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      // this.state.now = new Date();
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="Clock">
        <span>Heure : </span>
        <span>{this.state.now.toLocaleTimeString()}</span>
      </div>
    );
  }
}

export default Clock;
