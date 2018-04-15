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

  switchNameHandler = () => {
    //console.log(`was clicked`);
    this.setState({
      persons: [
        {name: `Lubomir_2018`, age: 32},
        {name: `Yulia`, age: 28},
        {name: `Oleg`, age: 64},
      ]
    });
  }
  // switchNameHandler(){console.log(`was clicked`);} 

  render() {
    return (
      <div className="App">
        <h1>Hi, I'am React App</h1>
        <p>This is really working</p>
        {/* <Person name = "Lubomir" age = "31"/>
        <Person name = "Yulia" age = "28">I love drawing</Person>
        <Person name = "Yulia" age = "28"><Drawing todo = "drawing"/></Person>
        <Person name = "Oleg" age = "45"/> */}
        <button onClick = {this.switchNameHandler}>Switch name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>I love drawing</Person>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}><Drawing todo = "drawing"/></Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
