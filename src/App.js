import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title: 'take out Thrash',
        completed:false
      },
      {
        id:2,
        title: 'dinner with wife',
        completed:false
      },  
      {
        id:3,
        title: 'meeting with client',
        completed:false
      }
    ]
  }

  // Toggle checked Todos
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id ){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  // Delete Todos
  deltodo = (id) => {
    // grab all todp objec in array, then return all that not match with the given id
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render () {
    
    return (
      <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.deltodo}/>
      </div>
    );
  }
}

export default App; 

