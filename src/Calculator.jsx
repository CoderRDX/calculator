import React from "react";
import { useState,useEffect } from "react";
import './Calculator.css'

export default function Calculator(){

    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) =>{
        setInput(input + value);
    }

    const handleClear = () => {
        setInput('');
        setResult('');
      };

      const handleEqual = () => {
        if(input === ''){
            setResult('Error');
            return;
        }
        try {
            if (input === ''){
                setResult('Error')
            }
          setResult(eval(input));
        } catch (error) {
          setResult('Error');
        }
      };
      
    

    
    return(
        <div className="calc">
            <h1>React Calculator</h1>
            <input type="text" value={input}  readOnly/>

            <div className="output">
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('+')}>+</button>
                
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('*')}>*</button>
                
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={handleEqual}>=</button>
                <button onClick={() => handleClick('/')}>/</button>
            </div>
        </div>

    );
}