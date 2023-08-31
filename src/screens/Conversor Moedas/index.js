/* eslint-disable arrow-body-style */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../../components/Cards/index';
import AlterarValor from '../../components/AlterarValor/index';

export default function ConversorMoedas(){

    return(
        <View style={styles.container}>
            <Card>
              <Text style={{fontSize: 20, lineHeight: 18}}>BRL </Text>
              <Text style={{fontSize: 15, lineHeight: 37}}>Real</Text>
            </Card>

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
