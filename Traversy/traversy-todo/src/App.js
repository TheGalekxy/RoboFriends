import React, { Component } from 'react';
import Todos from './Components/Todos'
import './App.css';


class App extends Component {
  state = {
    Todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with Family',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  
render(){
    return (
      <div className="App">
        <Todos Todos={this.state.Todos} />             {/* This is how you add the file info into the app */}
      </div>
    );
  }
}


export default App;
