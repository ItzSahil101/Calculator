import React, { useState } from 'react';
import './style.css';

const Calculator = () => {
    const [value, setValue] = useState("");

    const calculate = () => {
        if (value.length > 10) {
            alert("Sorry, we can't calculate more than 10 digits");
        } else {
            setValue(eval(value));
        }
    }

    const handleButtonClick = (input) => {
        if (value.length + input.toString().length <= 10) {
            setValue(value + input);
        } else {
            alert("Sorry, can't add more than 10 characters");
        }
    }

    return (
        <>
            <div className="container">
                <div className="calculator">
                    <input type="text" id="inputBox" placeholder="0" value={value} readOnly />
                    <div>
                        <button className="button operator" onClick={() => setValue("")}>AC</button>
                        <button className="button operator" onClick={() => alert("Sorry, Due to some bug this button is not working currently")}>DEL</button>
                        <button className="button operator" onClick={() => handleButtonClick("%")}>%</button>
                        <button className="button operator" onClick={() => handleButtonClick("/")}>/</button>
                    </div>
                    <div>
                        <button className="button" onClick={() => handleButtonClick(7)}>7</button>
                        <button className="button" onClick={() => handleButtonClick(8)}>8</button>
                        <button className="button" onClick={() => handleButtonClick(9)}>9</button>
                        <button className="button operator" onClick={() => handleButtonClick("*")}>*</button>
                    </div>
                    <div>
                        <button className="button" onClick={() => handleButtonClick(4)}>4</button>
                        <button className="button" onClick={() => handleButtonClick(5)}>5</button>
                        <button className="button" onClick={() => handleButtonClick(6)}>6</button>
                        <button className="button operator" onClick={() => handleButtonClick("-")}>-</button>
                    </div>
                    <div>
                        <button className="button" onClick={() => handleButtonClick(1)}>1</button>
                        <button className="button" onClick={() => handleButtonClick(2)}>2</button>
                        <button className="button" onClick={() => handleButtonClick(3)}>3</button>
                        <button className="button operator" onClick={() => handleButtonClick("+")}>+</button>
                    </div>

                    <div>
                        <button className="button" onClick={() => handleButtonClick("00")}>00</button>
                        <button className="button" onClick={() => handleButtonClick(0)}>0</button>
                        <button className="button" onClick={() => handleButtonClick(".")}>.</button>
                        <button className="button equalBtn" onClick={calculate}>=</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;
