import React from 'react';
import App from './easychild';

const person = {
  name: 'John Smith',
  number: '555-1234',
  dateOfBirth: '01/01/1990'
};

function ParentComponent() {
  return (
    <div>
      <App person={person} />
    </div>
  );
}

export default ParentComponent;
