import React,{Component} from 'react';




class FormAddTasks extends Component{
    
    constructor(){
        super();
        this.state = {
            title:"",
            responsible:"",
            description:"",
            priority:"low"
        };
        this.handleInput=this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleInput(e) {
        
        const {value,name} =e.target;
        this.setState({
            [name]:value
        });
        
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTasks(this.state);
        console.log(this.state);
        
    }
    render(){
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Title Task" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" className="form-control" placeholder="responsible" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <textarea name="description" className="form-control" placeholder="Description" onChange={this.handleInput}></textarea>
                        
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="priority" placeholder="priority" onChange={this.handleInput}>
                            <option value="">Select a Priority</option>
                            <option value="low">low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success form-control">Add Task</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default FormAddTasks;