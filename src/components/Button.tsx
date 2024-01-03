import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  rows?: 1 | 2 | 3 | 4;
}

const Button = ({ text, color = '#2D2D2D', rows = 1 }: Props) => {
  const textColor = color === '#9B9B9B' ? 'black' : 'white';

  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: rows * 80 + (rows - 1) * 10,
        }}
      >
        <Text
          style={{
            ...styles.buttonText,
            color: textColor,
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
