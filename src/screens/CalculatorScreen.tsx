import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Button from '../components/Button';

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

const CalculatorScreen = () => {
  const [total, setTotal] = React.useState('0');
  const [number, setNumber] = React.useState('10');
  const lastOperation = React.useRef<Operators>();

  const erase = () => {
    setNumber('0');
    setTotal('0');
  };

  const buildNumber = (textNumber: string) => {
    // Not accept double point
    if (number.includes('.') && textNumber === '.') return;
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

  const substract = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.substract;
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
        setTotal(`${num1 + num2}`);
        break;
      case Operators.substract:
        setTotal(`${num1 - num2}`);
        break;
      case Operators.multiply:
        setTotal(`${num1 * num2}`);
        break;
      case Operators.divide:
        setTotal(`${num1 / num2}`);
        break;
    }
    setNumber('0');
  };

  return (
    <View style={styles.calculatorContainer}>
      {total !== '0' && <Text style={styles.result}>{total}</Text>}
      <Text style={styles.active} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <Button text="C" color="#9B9B9B" onPress={erase} />
        <Button text="+/-" color="#9B9B9B" onPress={positiveNegative} />
        <Button text="del" color="#9B9B9B" onPress={deleteNumber} />
        <Button text="/" color="#FF9427" onPress={divide} />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={buildNumber} />
        <Button text="8" onPress={buildNumber} />
        <Button text="9" onPress={buildNumber} />
        <Button text="X" color="#FF9427" onPress={multiply} />
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={buildNumber} />
        <Button text="5" onPress={buildNumber} />
        <Button text="6" onPress={buildNumber} />
        <Button text="-" color="#FF9427" onPress={substract} />
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={buildNumber} />
        <Button text="2" onPress={buildNumber} />
        <Button text="3" onPress={buildNumber} />
        <Button text="+" color="#FF9427" onPress={add} />
      </View>
      <View style={styles.row}>
        <Button text="0" rows={2} onPress={buildNumber} />
        <Button text="." onPress={buildNumber} />
        <Button text="=" color="#FF9427" onPress={calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
