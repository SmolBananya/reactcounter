import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = { counter: 0 };

    addHandler = () => {
        console.log('toimii');
        this.setState({
            counter: this.state.counter +1
        })

    }

    removeHandler = () => {
        if (this.state.counter >0){
        console.log('jippii');
        this.setState({
            counter: this.state.counter -1
        })
    }

    };

    resetHandler = () => {
        console.log('Whoohoo!');
        this.setState({
            counter: 0
        })
    };




    render() {
        return (
            <div className="Counter">
                <div className={this.state.counter % 2 === 0 ? "Circle Even" : "Circle Odd"}>
                <div className="Number"><p>{this.state.counter}</p></div>
                </div>
                
                <div>
                    <button type="button" className="Buttons" onClick={this.addHandler}>Add one</button>
                    <button type="button" className="Buttons" onClick={this.removeHandler}>Remove one</button>
                    <button type="button" className="Buttons" onClick={this.resetHandler}>Reset game</button>
                </div>
            </div>
        );
    }
}

export default Counter;