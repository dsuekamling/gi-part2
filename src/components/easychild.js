import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: props.person
    };
  }
  
  render() {
    return (
      <div>
        <h1>Easy:</h1>
        <p>Name: {this.state.person.name}</p>
        <p>Number: {this.state.person.number}</p>
        <p>Date of Birth: {this.state.person.dateOfBirth}</p>
      </div>
    );
  }
}
export default App;
