import React,{Component} from 'react';
import {tasks} from '../tasks.json';
class TaskCard extends Component{
    constructor(){
        super();
        this.state={
            todos:tasks
        }
      }
    removeTask(index,alldata){
        console.log(alldata)
        
            alldata.filter((e,i)=>{
                return i!== index
            })
        
    }
    render(){
        const alldata = this.props.todox;
        const iteractive = this.props.vars;
        const todo=this.props.all

        return(
            <div className="col-md-4 mt-4" key={iteractive}>
                <div className="card">
                    <div className="card-header">
                        <h3>{alldata.title}</h3>
                        <span className="badge badge-pill badge-danger">{alldata.priority}</span>
                    </div>
                    <div className="card-body">
                        <p>{alldata.description}</p>
                        <p><mark>{alldata.responsible}</mark></p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger" onClick={this.removeTask.bind(this,iteractive,todo)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default TaskCard;