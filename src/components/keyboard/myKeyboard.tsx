import * as React from 'react';
import Button from '../buttons/Button';
import { View, Text } from 'react-native';
import { Styles } from '../../styles/GlobalStyles';
import { myColors } from '../../styles/Colors';
import { TextBold } from '../../Fonts';

export default function MyKeyboard() {
  const [expression, setExpression] = React.useState<string>('');
  const [result, setResult] = React.useState<number | null>(null);

  const handleButtonPress = (buttonValue: string) => {
    if (buttonValue === 'C') {
      clear();
    } else if (buttonValue === '=') {
      getResult();
    } else if (buttonValue === '+/-') {
      toggleSign();
    } else {
      setExpression((prevExpression) => prevExpression + buttonValue);
    }
  };

  const toggleSign = () => {
    // Check if the expression is not empty and the first character is a minus sign
    if (expression !== '' && expression[0] === '-') {
      // Remove the minus sign to make it positive
      setExpression(expression.slice(1));
    } else {
      // Add a minus sign to make it negative
      setExpression('-' + expression);
    }
  };

  const clear = () => {
    setExpression('');
    setResult(null);
  };

  const getResult = () => {
    try {
      // Replace '%' with '*0.01*' to correctly calculate percentages
      const cleanExpression = expression.replace(/%/g, '*0.01*');
      // eslint-disable-next-line no-eval
      const calculatedResult = eval(cleanExpression);
      setResult(calculatedResult);
      setExpression(calculatedResult.toString());
    } catch (error) {
      setResult(null);
      setExpression('Error');
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View style={Styles.viewBottom}>
        <View
          style={{
            height: 120,
            width: '90%',
            justifyContent: 'flex-end',
            alignSelf: 'center'
          }}
        >
          <Text style={Styles.screenSecondNumber}>{expression}</Text>
          {result !== null && (
            <TextBold
              text={result.toString()}
              style={
                result.toString().length < 5
                  ? Styles.screenFirstResult
                  : Styles.screenFirstResult2
              }
            />
          )}
        </View>
        <View style={{ backgroundColor: myColors.blue, height: 2 }} />
        <View style={Styles.row}>
          <Button title="C" isBblue onPress={() => handleButtonPress('C')} />
          <Button
            title="⌫"
            isBblue
            onPress={() =>
              setExpression((prevExpression) =>
                prevExpression.slice(0, prevExpression.length - 1)
              )
            }
          />
          <Button title="%" isBblue onPress={() => handleButtonPress('%')} />
          <Button title="/" isBblue onPress={() => handleButtonPress('/')} />
        </View>
        <View style={Styles.row}>
          <Button title="7" onPress={() => handleButtonPress('7')} />
          <Button title="8" onPress={() => handleButtonPress('8')} />
          <Button title="9" onPress={() => handleButtonPress('9')} />
          <Button title="*" isBblue onPress={() => handleButtonPress('*')} />
        </View>
        <View style={Styles.row}>
          <Button title="4" onPress={() => handleButtonPress('4')} />
          <Button title="5" onPress={() => handleButtonPress('5')} />
          <Button title="6" onPress={() => handleButtonPress('6')} />
          <Button title="-" isBblue onPress={() => handleButtonPress('-')} />
        </View>
        <View style={Styles.row}>
          <Button title="1" onPress={() => handleButtonPress('1')} />
          <Button title="2" onPress={() => handleButtonPress('2')} />
          <Button title="3" onPress={() => handleButtonPress('3')} />
          <Button title="+" isBblue onPress={() => handleButtonPress('+')} />
        </View>
        <View style={Styles.row}>
          <Button
            title="+/-"
            isBblue
            onPress={() => handleButtonPress('+/-')}
          />
          <Button title="." onPress={() => handleButtonPress('.')} />
          <Button title="0" onPress={() => handleButtonPress('0')} />
          <Button title="=" isResult onPress={() => getResult()} />
        </View>
      </View>
    </View>
  );
}
