import React, { Component } from 'react';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: "Daniel Suekamling", number: "7042377375", dateOfBirth: "02/07/1997" },
        { name: "John Doe", number: "1234567890", dateOfBirth: "01/01/1990" },
        { name: "Jane Smith", number: "0987654321", dateOfBirth: "12/31/1985" }
      ]
    };
  }

  render() {
    const peopleList = this.state.people.map(person => {
      return <BasicInfo name={person.name} number={person.number} dateOfBirth={person.dateOfBirth} />
    });

    return (
      <div className="App">
        {peopleList}
      </div>
    );
  }
}

function BasicInfo(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Number: {props.number}</p>
      <p>Date of Birth: {props.dateOfBirth}</p>
    </div>
  );
}

export default App;