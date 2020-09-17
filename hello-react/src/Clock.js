import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
    };
  }

  startClock() {
    this._interval = setInterval(() => {
      // this.state.now = new Date();
      // setState equivalent à Object.assign
      this.setState({
        now: new Date(),
      });
    }, this.props.delay);
  }

  stopClock() {
    clearInterval(this._interval);
  }

  // lifecycle
  componentDidMount() {
    this.startClock();
  }

  componentDidUpdate(previousProps) {
    if (this.props.delay !== previousProps.delay) {
      this.stopClock();
      this.startClock();
    }
  }

  componentWillUnmount() {
    this.stopClock();
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
