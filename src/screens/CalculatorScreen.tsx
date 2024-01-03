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
      <View style={styles.row}>
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="X" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <Button text="0" rows={2} />
        <Button text="." />
        <Button text="=" color="#FF9427" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
