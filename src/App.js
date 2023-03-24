import React, { Component } from 'react';
import './App.css';
import VeryEasy from './components/veryeasy';
import Easy from './components/easychild';
import Medium from './components/medium';
import Hard from './components/hard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Challenges</h1>
        <div className="challenges">
          <VeryEasy />
          <Easy person={people[0]} />
          <Medium />
          <Hard />
        </div>
      </div>
    );
  }
}
const people = [
  {
    name: "John Doe",
    number: "555-1234",
    dateOfBirth: "01/01/2000"
  }
]
export default App;

