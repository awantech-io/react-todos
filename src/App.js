import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';
import Todos from './components/Todos';
import Header from './layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';



class App extends Component {
  state = {
    todos:[
      {
        id:uuidv4(),
        title: 'take out Thrash',
        completed:false
      },
      {
        id:uuidv4(),
        title: 'dinner with wife',
        completed:false
      },  
      {
        id:uuidv4(),
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
 
  // Add Todo method
  addTodo = (title) => {
    const newTodo = {
      id:uuidv4(),
      title,
      completed:false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  } 

  render () {
    
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header />

        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.deltodo}/>
          </React.Fragment>
        )} />

        <Route path="/about" component={About} />

        
      </div>
      </div>
      </Router>
    );
  }
}

export default App; 

