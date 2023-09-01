/* eslint-disable arrow-body-style */
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import AlterarValor from '../../components/AlterarValor/index';
import { fetchConvertor } from '../../services/api/conversor-moedas';
import DATA_CURRENCY from '../../data';

export default function ConversorMoedas(){
  const [value, setValue] = useState('Por enquanto nd')

    return(
        <View style={styles.container}>
        <Text style={styles.p}>{value}</Text>
        <AlterarValor data={DATA_CURRENCY} getValue={setValue}/>
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
