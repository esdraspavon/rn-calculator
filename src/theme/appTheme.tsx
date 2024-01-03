import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    flex: 1,
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    color: '#ffffff',
    fontSize: 60,
    textAlign: 'right',
  },
  active: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#333333',
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '300',
  },
});
