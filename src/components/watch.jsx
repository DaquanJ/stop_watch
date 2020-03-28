import React, { Component } from 'react';


class Watch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleStart = () => {
        this.timer = setInterval(() => {
            this.setState({count: this.state.count + 1})
        },1000);
    };

    handlePause = () => {
        clearInterval(this.timer);
    };

    handleRestart = () => {
        this.setState({count: 0});
        clearInterval(this.timer);
    };

    render() {
        const {count} = this.state;
        return (
            <div className='watch' >
            <h1 id='title' > STOP WATCH  </h1>
            <p></p>
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