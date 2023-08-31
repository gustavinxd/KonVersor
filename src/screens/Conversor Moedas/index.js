/* eslint-disable arrow-body-style */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Card from '../../components/Cards/index';
import ButtonCard from '../../components/Button/index';
import AlterarValor from '../../components/AlterarValor/index';

export default function ConversorMoedas(){

    return(
        <View style={styles.container}>
            <Card/>
              <TouchableOpacity >
                <ButtonCard/>
              </TouchableOpacity>
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
  },
  card: {
    flex: 1,
    justifyContent: "space-between"
  },
})
