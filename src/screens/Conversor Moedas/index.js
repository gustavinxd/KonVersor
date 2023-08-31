import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../../components/Cards/index';

export default function ConversorMoedas(){
    return(
        <View style={styles.container}>
            <Card/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#0D0D0D',
      flex: 1,
      justifyContent: '',
      alignItems: '',
      padding: 30,
  },
  p:{
    color:'#fff'
  }
})
