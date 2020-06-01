import React from 'react';
import TodosCreator from './TodosCreator';
import './App.css';

function App() {

  return (
      <div className="app-grid">
        <TodosCreator />
        <div>Project gql</div>
        <div>Project realm</div>
        <div>Project gql + realm</div>
      </div>
  );
}

export default App;
