import React, { Component } from "react";

// class Count extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       increment: 0,
//     };
//     this.increment = this.increment.bind(this);
//   }
//   increment() {
//     this.setState({
//       increment: this.state.increment + 1,
//     });
//   }
//   render() {
//     return (
//       <button onClick={this.increment} className="Button">
//         {this.state.increment}
//       </button>
//     );
//   }
// }

class Count extends Component {
  state = {
    increment: 0,
  };
  increment = () => {
    this.setState({
      increment: this.state.increment + 1,
    });
  };
  render() {
    return (
      <button onClick={this.increment} className="Button">
        {this.state.increment}
      </button>
    );
  }
}


export default Count;
