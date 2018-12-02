import React, { Component } from 'react';
import './App.css';
import TodoList from "./components/todoList";
import TodoCreater from "./components/todoCreater";

const todos = [
  {
    description: 'Learn Java Script',
    isDone: true
  },
  {
    description:"Learn React",
    isDone: false
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)
  }
  state = {
    counter: 0,
    todos
  }
  increment(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decrement= ()=>{
    this.setState({
      counter: this.state.counter - 1
    });
  }
  createTodo=(todo)=>{
    const todos = [...this.state.todos]
    todos.push(todo)
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="App">
        <TodoCreater onTodoCreate={this.createTodo}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
