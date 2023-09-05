import { React, useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { myColors } from '../../styles/Colors';
import MyKeyboard from '../../components/keyboard/myKeyboard';

export default function Calculadora() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, { backgroundColor: '#000' }]
        }
      >
        {/* <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        /> */}
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
