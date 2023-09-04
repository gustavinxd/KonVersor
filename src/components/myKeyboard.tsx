import * as React from 'react';
import Button from './Button';
import { View, Text } from 'react-native';
import { Styles } from '../styles/GlobalStyles';
import { myColors } from '../styles/Colors';
import { TextBold } from '../Fonts';

export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [result, setResult] = React.useState<Number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };
  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  };
  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case '+':
        clear();
        setResult(parseFloat(secondNumber) + parseFloat(firstNumber));
        break;
      case '-':
        clear();
        setResult(parseFloat(secondNumber) - parseFloat(firstNumber));
        break;
      case '*':
        clear();
        setResult(parseFloat(secondNumber) * parseFloat(firstNumber));
        break;
      case '/':
        clear();
        if(parseFloat(firstNumber) !== 0){
          setResult(parseFloat(secondNumber) / parseFloat(firstNumber));
        } else if(parseFloat(secondNumber) === 0){
          setResult(0);
        }
        break;
      case '%':
        clear();
        setResult(0);
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <TextBold
          text={result?.toString()}
          style={
            result.toString().length < 5
              ? Styles.screenFirstResult
              : Styles.screenFirstResult2
          }
        />
          
        
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <TextBold  text={firstNumber} style={Styles.screenFirstNumber}/>
    }
    if (firstNumber === '') {
      return <TextBold  text={'0'} style={Styles.screenFirstNumber}/>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <TextBold  text={firstNumber}  style={[Styles.screenFirstNumber, { fontSize: 70 }]}/>
          
      );
    }
    if (firstNumber.length > 7) {
      return (
        <TextBold  text={firstNumber} style={[Styles.screenFirstNumber, { fontSize: 50 }]}/>
          
      );
    }
  };

  return (
    
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: '90%',
          justifyContent: 'flex-end',
          alignSelf: 'center'
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: '#2E9FB6', fontSize: 50, fontWeight: '500' }}>
            {operation}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={{backgroundColor: myColors.blue, height: 2}}/>
      <View style={Styles.row}>
        <Button title="C" isBblue onPress={clear} />
        <Button title="⌫" isBblue onPress={() => setFirstNumber(firstNumber.slice(0, -1))}/>
        <Button title="%" isBblue onPress={() => handleOperationPress('%')} />
        <Button title="/" isBblue onPress={() => handleOperationPress('/')} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress('7')} />
        <Button title="8" onPress={() => handleNumberPress('8')} />
        <Button title="9" onPress={() => handleNumberPress('9')} />
        <Button title="*" isBblue onPress={() => handleOperationPress('*')} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress('4')} />
        <Button title="5" onPress={() => handleNumberPress('5')} />
        <Button title="6" onPress={() => handleNumberPress('6')} />
        <Button title="-" isBblue onPress={() => handleOperationPress('-')} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress('1')} />
        <Button title="2" onPress={() => handleNumberPress('2')} />
        <Button title="3" onPress={() => handleNumberPress('3')} />
        <Button title="+" isBblue onPress={() => handleOperationPress('+')} />
      </View>
      <View style={Styles.row}>
        <Button title="+/-"  isBblue onPress={() => handleOperationPress('+/-')}/>
        <Button title="." onPress={() => handleNumberPress('.')} />
        <Button title="0" onPress={() => handleNumberPress('0')} />
        <Button title="=" isResult onPress={() => getResult()} />
      </View>
    </View>
  );
}
