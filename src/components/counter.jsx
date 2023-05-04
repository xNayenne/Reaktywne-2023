import React, {Component} from "react";

class Counter extends Component{
    state = {
        count: 0
    };
    incrementNumber=()=>{
        this.setState({ count :this.state.count+1})
    };
    currentCount=()=>{
        return this.state.count === 0 ? 'zero' :this.state.count;
    }

    resetCount=()=>{
        this.setState({count:0});
    }

    render(){
        return<div>
            <span className="badge bg-primary m-2">{this.currentCount()}</span>
            <button className="btn btn-secondary btn-sm" onClick={this.incrementNumber}>add value</button>
            <button className="btn btn-danger btn -sm" onClick={this.resetCount}>reset</button>
        </div>
    }
}

export default Counter;