import React, { Component } from 'react';

class Test extends Component {
    
    state={
        isLoaded: false,
        val:"false"
    }
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
               // isLoaded: true,
               val: "true",
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
               // isLoaded: true,
                error
              });
            }
          )
      }

    render() { 
        return (  
        <div><h1>This is the content of the test component:: {this.state.val}</h1>
        <button type="button" onClick={this.changeColor}>Change number</button></div>
        );
    }
    changeColor=()=>{
    this.setState({val:"false"});
    }
}
 
export default Test;    