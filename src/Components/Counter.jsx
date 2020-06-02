import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        counter:0,
        isvalid:false
     }
     componentDidMount() {
         this.setState({counter:1});
     }
     componentDidUpdate(){
         if(!this.state.isvalid){
            this.setState({counter:this.state.counter+1});
         }
         if(this.state.counter===10){
             this.setState({isvalid:true});
         }
     }
    render() { 
        return ( <div>{this.state.isvalid?"hellooo...!!!!":"haiii.....!!!"}{console.log("rerendering-counter")}</div>);
    }
}
 
export default Counter;