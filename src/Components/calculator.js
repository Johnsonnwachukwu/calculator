// src/components/Calculator.js

import React, { useState } from 'react';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    setExpression(prevExpression => prevExpression + value);
  };

  const handleClear = () => {
    setExpression('');
  };

  const calculateResult = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-4xl text-gray-800 font-bold mb-8">Johnson's Calculator</h1>
        <input
          className="w-full h-16 px-3 mb-4 text-right text-3xl bg-gray-200 text-gray-800 rounded-lg outline-none"
          type="text"
          value={expression}
          readOnly
        />
        <div className="grid grid-cols-4 gap-4 text-center">
          <button className=" text-center col-span-3 p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={handleClear}>AC</button>
          <button className="p-4 text-3xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('/')}>/</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('7')}>7</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('8')}>8</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('9')}>9</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('*')}>*</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('4')}>4</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('5')}>5</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('6')}>6</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('-')}>-</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('1')}>1</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('2')}>2</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('3')}>3</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('+')}>+</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('0')}>0</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={() => handleClick('.')}>.</button>
          <button className="p-4 text-2xl bg-gray-300 text-gray-800 rounded-lg justify-center hover:bg-gray-400" onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

