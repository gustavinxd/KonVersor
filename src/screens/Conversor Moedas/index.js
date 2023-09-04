/* eslint-disable arrow-body-style */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../../components/Cards/index';
import ButtonCard from '../../components/Button/index';
import Btn from '../../components/Teclado/index';
// import AlterarValor from '../../components/AlterarValor/index';

export default function ConversorMoedas(){
  return(
      <View style={styles.container}>
          <Card/>
              <ButtonCard/>
          <Card/>
      </View>
      <View style = {styles.}>
        <Btn label="7" aoClicar={()=>{}}></Btn>
        <Btn label="8" aoClicar={()=>{}}></Btn>
        <Btn label="9" aoClicar={()=>{}}></Btn>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#0D0D0D',
      flex: 1,
      padding: 30,
      gap: 18,
  },
  p:{
    color:'#fff'
  },
  card: {
    
  },
})
