import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/message'

class App extends Component {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)
  }
  state = {
    counter: 0,
    phrases: ["hello", "Sona"]
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
  render() {
    return (
      <div className="App">
        <Message text={"sdfghj"} phrases={this.state.phrases}></Message>
        <div>{this.props.text}</div>
        {this.state.counter}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
