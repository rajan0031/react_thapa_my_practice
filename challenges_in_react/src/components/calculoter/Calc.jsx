import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        if (value === "=") {
            setInput(eval(input));

        }
        else {

            setInput((prevInput) => prevInput + value);
        }
        console.log(input)
    };

    const handleClear = () => {
        setInput('');
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="max-w-xs mx-auto mt-8 p-4 bg-gray-100 rounded shadow">
            <input
                type="text"
                value={input}
                readOnly
                className="w-full mb-4 p-2 text-right bg-white border border-gray-300 rounded"
            />

            <div className="grid grid-cols-4 gap-2">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(item)}
                        className="col-span-1 bg-blue-500 text-white p-2 rounded"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
