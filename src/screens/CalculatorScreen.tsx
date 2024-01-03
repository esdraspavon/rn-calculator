import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Button from '../components/Button';

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.result}>1,500.00</Text>
      <Text style={styles.active}>1,500.00</Text>
      <View style={styles.row}>
        <Button text="C" color="#9B9B9B" />
        <Button text="+/-" color="#9B9B9B" />
        <Button text="del" color="#9B9B9B" />
        <Button text="/" color="#FF9427" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
