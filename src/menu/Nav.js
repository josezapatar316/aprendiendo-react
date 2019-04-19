import React,{Component} from "react";

class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
              <a href="" className="text-white">
                Tasks<span className="badge badge-pill badge-primary ml-2">{this.props.totalTasks.length}</span>
              </a>
            </nav>    
        )
    }
}
export default Nav;