import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ConversorMedidas(){
    return(
        <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, styles.container]}>
        <Text style={styles.p}>Medidas</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#0D0D0D',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  p:{
    color:'#fff'
  }
})