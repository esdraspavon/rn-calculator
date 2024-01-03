import React from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [total, setTotal] = React.useState('0');
  const [number, setNumber] = React.useState('10');
  const lastOperation = React.useRef<Operators>();

  const erase = () => {
    setNumber('0');
    setTotal('0');
  };

  const buildNumber = (textNumber: string) => {
    // Not accept double point
    if (number.includes('.') && textNumber === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.' || number.includes('.')) {
        setNumber(number + textNumber);
      } else {
        setNumber(textNumber);
      }
      return;
    }
    setNumber(number + textNumber);
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const deleteNumber = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const changeNumberForPrevious = () => {
    if (number.endsWith('.')) {
      setTotal(number.slice(0, -1));
    } else {
      setTotal(number);
    }
    setNumber('0');
  };

  const divide = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.divide;
  };

  const multiply = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.multiply;
  };

  const subtract = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.subtract;
  };

  const add = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(total);
    const num2 = Number(number);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num1 - num2}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumber(`${num1 / num2}`);
        break;
    }
    setTotal('0');
  };

  return {
    total,
    number,
    functions: {
      erase,
      buildNumber,
      positiveNegative,
      deleteNumber,
      divide,
      multiply,
      subtract,
      add,
      calculate,
    },
  };
};
