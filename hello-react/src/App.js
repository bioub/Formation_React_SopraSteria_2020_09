import React from 'react';
import Clock from './Clock';
import Count from './Count';
import Hello from './Hello';
import Select from './Select';
import UserForm from './UserForm';

function App() {
  const prenom = 'Eric';
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
      <Select items={['Bleu', 'Blanc', 'Rouge']} selected="Rouge" />
      <UserForm />
    </div>
  );
}

export default App;
