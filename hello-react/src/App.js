import React, { Component } from "react";
import Clock from "./Clock";
import Count from "./Count";
import Hello from "./Hello";
import Select from "./Select";
import UserForm from "./UserForm";
import Todolist from "./Todolist";

// function App() {
//   const prenom = 'Eric';
//   return (
//     <div className="App">
//       <Hello name="Romain" />
//       <Hello name={123} />
//       <Hello name={prenom} />
//       <Clock />
//       <Count />
//       <Count />
//       <Count />
//       <Count />
//       <Select items={['Bleu', 'Blanc', 'Rouge']} selected="Rouge" />
//       <UserForm />
//       <h2>Todolist</h2>
//       <Todolist />
//     </div>
//   );
// }

class App extends Component {
  state = {
    colors: ["Bleu", "Blanc", "Rouge"],
    selectedColor: "Rouge",
    delay: 1,
    showClock: true,
  };
  handleSelected = (item) => {
    this.setState({
      selectedColor: item,
    });
  };
  handleDelayChange = (event) => {
    this.setState({
      delay: Number(event.target.value),
    });
  };
  handleToggleShowClock = (event) => {
    this.setState({
      showClock: !this.state.showClock,
    });
  };
  render() {
    const prenom = "Eric";
    const { colors, selectedColor, delay, showClock } = this.state;
    return (
      <div className="App">
        <Hello name="Romain" />
        <Hello name={123} />
        <Hello name={prenom} />
        <h2>Clock</h2>
        <p>
          Délai (en s) :{" "}
          <input
            type="number"
            value={delay}
            onChange={this.handleDelayChange}
          />
        </p>
        <button onClick={this.handleToggleShowClock}>
          {showClock ? "Off" : "On"}
        </button>
        {showClock && <Clock delay={delay * 1000} />}
        <Count />
        <Count />
        <Count />
        <Count />
        <Select
          items={colors}
          selected={selectedColor}
          onSelected={this.handleSelected}
        />
        <p>La couleur sélectionnée : {selectedColor}</p>
        <UserForm />
        <h2>Todolist</h2>
        <Todolist />
      </div>
    );
  }
}

export default App;
