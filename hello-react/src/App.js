import React, { Component } from 'react';
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
  };
  handleSelected = (item) => {
    this.setState({
      selectedColor: item,
    })
  }
  render() {
    const prenom = "Eric";
    const { colors, selectedColor } = this.state;
    return (
      <div className="App">
        <Hello name="Romain" />
        <Hello name={123} />
        <Hello name={prenom} />
        <Clock />
        <Count />
        <Count />
        <Count />
        <Count />
        <Select items={colors} selected={selectedColor} onSelected={this.handleSelected} />
        <p>La couleur sélectionnée : {selectedColor}</p>
        <UserForm />
        <h2>Todolist</h2>
        <Todolist />
      </div>
    );
  }
}

export default App;
