import React from 'react';
import IssueCard from './components/IssueCard'
import CardList from './components/CardList'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Angular Logged Issues</h1>
      {/* <IssueCard /> */}
      <CardList />
    </div>
  );
}

export default App;
