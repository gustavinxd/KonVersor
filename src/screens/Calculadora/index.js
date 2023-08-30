import { React, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Switch, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { myColors } from '../../styles/Colors';
import Button from '../../components/Button';
import MyKeyboard from '../../components/myKeyboard';

export default function Calculadora() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, { backgroundColor: '#000' }]
        }
      >
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: myColors.light,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  p: {
    color: '#fff'
  }
});
