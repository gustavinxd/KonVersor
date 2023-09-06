import React from 'react';
import { StyleSheet, TouchableHighlight, Dimensions, Text } from 'react-native';

export default function Btn({ children, onPress, hasText, text }) {
  return (
    <TouchableHighlight onPress={onPress} style={styles.btn} activeOpacity={0.7}>
      {hasText ? <Text style={styles.p}>{text}</Text> : children}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: Dimensions.get('window').width / 4.7,
    width: Dimensions.get('window').width / 3.5,
    backgroundColor: '#05080A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  p: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'InriaSans_700Bold'
  }
});
