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
    ],
    otherState: `tatatata`,
    showPersons: false,
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
        {name: `Lubomir_2060`, age: 32},
        {name: event.target.value, age: 28},
        {name: `Oleg`, age: 64},
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: `red`,
      border: `2px solid green`,
      cursor: `pointer`,
      fontSize: `20px`,
      padding: `10px`,
    };

    let persons = null;
    console.log(1, this.state.showPersons);
    if( this.state.showPersons ) {
      persons = (
        <div>
          {/* <Person 
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
            <Drawing todo = "smiling"/>
          </Person>
          <Person 
            name = {this.state.persons[2].name}
            age = {this.state.persons[2].age}
          /> */}

          {this.state.persons.map(person => {
            return <Person 
              name={person.name}
              age={person.age}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'am React App</h1>
        <p>This is really working</p>
        {/* <button style = {style} onClick = {() => this.switchNameHandler(`Lubomir_2030`)}>Switch name</button> */}
        <button onClick = {this.togglePersonHandler}>Switch name</button>
        {persons}
      </div>
    );
  }
}

export default App;
