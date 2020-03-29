import React, { Component } from 'react';


class Watch extends Component {

    constructor(props) {
        super(props)
    // super is an inheritance key word used to inherit methods from the parent class created within its constructor
    // the argument passed (props) is what we are inheriting  
        this.state = {
            count: 0
        }
    // setting our default state , count to be 0 
    }

    handleStart = () => {
        this.timer = setInterval(() => {
            this.setState({count: this.state.count + 1})
        },1000);
    // we make a function because our instructions are to be called later in a button
    // setInterval automates the actions within our function when our function is called by a time we give it 
    // setState updates what ever state we pass to it 
    // this.timer stores our nested function to be called later 
    };

    handlePause = () => {
        clearInterval(this.timer);
        // clearInterval clears the time constraint given to any argument we pass to it with an interval in place, stopping the automation
    };

    handleRestart = () => {
        this.setState({count: 0});
        clearInterval(this.timer);
    // setState is updating count to 0 which matches our default state.
    // clearInterval is used here to stop the count after it is reset
    };

    render() {
        const {count} = this.state;
        return (
            <div className='watch' >
            <h1 id='title' > STOP WATCH  </h1>
            <p id='des' > KEEP TRACK OF YOUR TIME ! </p>
            <h1 id='count' > {count} </h1>
            <div className='buttons'>
            <button onClick={this.handleStart} > START </button>
            <button onClick={this.handlePause} > PAUSE </button>
            <button onClick={this.handleRestart} > RESTART </button>
            </div>
            </div>
        );
    }
}

export default Watch;


// citation - https://www.youtube.com/watch?v=NAx76xx40jM