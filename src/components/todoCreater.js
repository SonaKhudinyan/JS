import React, { Component } from "react"
export default class TodoCreater extends Component{
    state = {
        description: ""
    }
    handleInputChange = (e)=>{
        const value = e.target.value;
        this.setState({
            description: value
        });
    }
    handleClick=()=>{
        if(!this.state.description){
            return;
        }
        const todo = {
            description: this.state.description,
            isDone: false
        };
        if(this.state.description){
            this.setState({
                description: ""
            })
        }
        this.props.onTodoCreate(todo)
    }
    handleEnter=(e)=>{
        if(e.keyCode===13){
            this.handleClick()
        }
        
    }
    render(){
        return (
        <div className="Todo-creater">
            <input onKeyUp={this.handleEnter} onChange={this.handleInputChange} value={this.state.description}/>
            <button onClick={this.handleClick}>Add</button>
        </div>
        )
    }
}