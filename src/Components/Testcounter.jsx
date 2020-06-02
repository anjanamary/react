import React, { Component } from 'react';

class Testcounter extends Component {
    state = { 
        counter:0,
        isvalid:false
     }
     componentDidMount() {
         
            this.setState({counter:this.state.counter+1});
            if(this.state.counter===10){
                this.setState({isvalid:true});
            }
         
        
     }

     shouldComponentUpdate(){
        if(!this.state.isvalid){
            return false;
         }
         else{
             return true;
         }
       
     }
    render() { 
        return ( <div>{this.state.isvalid?"helloootest...!!!!":"haiiitest.....!!!"}{console.log("re-rendering-testcounter")}</div> );
    }
}
 
export default Testcounter;