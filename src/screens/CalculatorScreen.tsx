import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Button from '../components/Button';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const { total, number, functions } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {total !== '0' && <Text style={styles.result}>{total}</Text>}
      <Text style={styles.active} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <Button text="C" color="#9B9B9B" onPress={functions.erase} />
        <Button
          text="+/-"
          color="#9B9B9B"
          onPress={functions.positiveNegative}
        />
        <Button text="del" color="#9B9B9B" onPress={functions.deleteNumber} />
        <Button text="/" color="#FF9427" onPress={functions.divide} />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={functions.buildNumber} />
        <Button text="8" onPress={functions.buildNumber} />
        <Button text="9" onPress={functions.buildNumber} />
        <Button text="X" color="#FF9427" onPress={functions.multiply} />
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={functions.buildNumber} />
        <Button text="5" onPress={functions.buildNumber} />
        <Button text="6" onPress={functions.buildNumber} />
        <Button text="-" color="#FF9427" onPress={functions.subtract} />
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={functions.buildNumber} />
        <Button text="2" onPress={functions.buildNumber} />
        <Button text="3" onPress={functions.buildNumber} />
        <Button text="+" color="#FF9427" onPress={functions.add} />
      </View>
      <View style={styles.row}>
        <Button text="0" rows={2} onPress={functions.buildNumber} />
        <Button text="." onPress={functions.buildNumber} />
        <Button text="=" color="#FF9427" onPress={functions.calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
