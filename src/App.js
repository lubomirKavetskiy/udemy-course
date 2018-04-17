import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Drawing from './Person/Drawing';

class App extends Component {
  state = {
    persons: [
      {name: `Lubomir`, age: 32},
      {name: `Yulia`, age: 28},
      {name: `Oleg`, age: 42},
    ]
  }

  switchNameHandler = (newName) => {
    //console.log(`was clicked`);
    this.setState({
      persons: [
        {name: newName, age: 32},
        {name: `Yulia`, age: 28},
        {name: `Oleg`, age: 64},
      ]
    });
  }
  // switchNameHandler(){console.log(`was clicked`);} 

  nameChangeHendler = (event) => {
    this.setState({
      persons: [
        {name: `Lubomir_2050`, age: 32},
        {name: event.target.value, age: 28},
        {name: `Oleg`, age: 64},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'am React App</h1>
        <p>This is really working</p>
        <button onClick = {() => this.switchNameHandler(`Lubomir_2030`)}>Switch name</button>
        <Person 
          name = {this.state.persons[0].name}
          age = {this.state.persons[0].age}
          click = {this.switchNameHandler.bind(this, `Lubomir_2020`)} 
          changed = {this.nameChangeHendler}
        />
        <Person 
          name = {this.state.persons[1].name}
          age = {this.state.persons[1].age}>
          I love drawing
        </Person>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}>
          <Drawing todo = "drawing"/>
        </Person>
        <Person 
          name = {this.state.persons[2].name}
          age = {this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
