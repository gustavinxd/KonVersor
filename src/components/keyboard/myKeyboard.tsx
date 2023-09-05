import * as React from 'react';
import Button from '../buttons/Button';
import { View, Text } from 'react-native';
import { Styles } from '../../styles/GlobalStyles';
import { myColors } from '../../styles/Colors';
import { TextBold } from '../../Fonts';

export default function MyKeyboard() {
  // declaração das useStates
  const [expression, setExpression] = React.useState<string>('');
  const [result, setResult] = React.useState<number | null>(null);

  // condicionais e funcoes para os handlebuttons
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

  // ToggleSign para setar o numero como + ou -
  const toggleSign = () => {
    if (expression !== '' && expression[0] === '-') {
      setExpression(expression.slice(1));
    } else {
      setExpression('-' + expression);
    }
  };

  // funcao para limpar as expressoes digitadas
  const clear = () => {
    setExpression('');
    setResult(null);
  };

  // funcao para realizar as contas
  const getResult = () => {
    try {
      const cleanExpression = expression.replace(/%/g, '*0.01*');
      const calculatedResult = eval(cleanExpression);
      setResult(calculatedResult);
      setExpression(calculatedResult.toString());
    } catch (error) {
      setResult(null);
      setExpression('Error');
    }
  };

  return (
    // view main da calculadora
    <View style={Styles.viewBottom}>
      {/* view do resultado  */}
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
        {/* barrinha de divisao do display com o teclado  */}
        <View style={{ backgroundColor: myColors.blue, height: 2 }} />
        {/* view do teclado  */}
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
