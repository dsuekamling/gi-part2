import React from 'react';

class BasicInfo extends React.Component {
  render() {
    const { name, number, dateOfBirth } = this.props.person;
    return (
      <div>
        <h1>Medium & Hard:</h1>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        <p>Date of Birth: {dateOfBirth}</p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Daniel Suekamling",
        number: "7042377375",
        dateOfBirth: "02/07/1997"
      }
    };
  }
  
  render() {
    return (
      <div>
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}
export default App;
