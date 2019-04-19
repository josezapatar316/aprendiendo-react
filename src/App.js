import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './menu/Nav';
import {tasks} from './tasks.json';
import TaskCard from "./taskCard/TaskCard"
import FormAddTasks from './FormAddTaks/FormAddTasks';
class App extends Component {
  constructor(){
    super();
    this.state={
        todos:tasks
    }
    this.addTasks=this.addTasks.bind(this);
  }
  addTasks(tasksx) {
    this.setState({
      todos:[...this.state.todos,tasksx]
    })
  }
  removeTask(index){
    console.log(index)
    this.setState({
      todos:this.state.todos.filter((e,i)=>{
          return i!== index
      })
  });
  }
  render() {
    
    // const todox = this.state.todos.map((todo,i)=>{
    //                 return(  
    //                     <TaskCard todox={todo} vars={i} all={this.state.todos} />
    //                   )
    //               });
    
    const todox = this.state.todos.map((todo,i)=>{
      return(
            <div className="col-md-4 mt-4" key={i}>
                <div className="card">
                    <div className="card-header">
                        <h3>{todo.title}</h3>
                        <span className="badge badge-pill badge-danger">{todo.priority}</span>
                    </div>
                    <div className="card-body">
                        <p>{todo.description}</p>
                        <p><mark>{todo.responsible}</mark></p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger" onClick={this.removeTask.bind(this,i)}>Delete</button>
                    </div>
                </div>
            </div>
      )
    });
    return (
      <div className="App">
          <Nav totalTasks={this.state.todos} />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img src={logo} className="App-logo" alt="logo" />
                <FormAddTasks onAddTasks={this.addTasks} />
              </div>
              <div className="col-md-9">
                <div className="row">
                  {todox}
                </div>
              </div>
            </div>
          </div>
          
      </div>
    );
  }
}

export default App;
