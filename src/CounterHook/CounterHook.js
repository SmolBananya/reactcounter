import React, { useState } from 'react';
import './CounterHook.css';

const CounterHook = () => {

    const [counter, setCounter] = useState(0);

    const addHandler = () => {
        setCounter(counter +1);
    };

    const resetHandler = () => {
        setCounter(0);
    };

    const removeHandler = () => {
        counter <=0 ? setCounter(0) : setCounter(counter -1)
    };

    let test =
    counter === 0
    ? "Circle neutral"
    : counter % 10 === 0
    ? "Circle pink"
    : counter % 2 === 0
    ? "Circle Even"
    : "Circle Odd"
    return (
        <div>
        <div className={test}><p className="Number">{counter} 
        </p></div>

            <div className="Buttons">
            <button type="button" className="Buttons" onClick={addHandler}>Add one</button>
            <button type="button" className="Buttons" onClick={removeHandler}>Remove one</button>
            <button type="button" className="Buttons" onClick={resetHandler} >Reset</button>

            </div>
        </div>
    );








}

export default CounterHook;