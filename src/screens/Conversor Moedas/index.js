/* eslint-disable arrow-body-style */
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Card from '../../components/Cards/index';
import ButtonCard from '../../components/Button/index';
import Btn from '../../components/Teclado/index';
// import AlterarValor from '../../components/AlterarValor/index';
import { Feather } from '@expo/vector-icons';

export default function ConversorMoedas(){
  return(
      <SafeAreaView style={styles.container}>
          <Card/>
              <ButtonCard/>
          <Card/>
        <View style = {styles.button}>
           <Btn label="7" aoClicar={()=>{}}></Btn>
           <Btn label="8" aoClicar={()=>{}}></Btn>
           <Btn label="9" aoClicar={()=>{}}></Btn>
        </View>
        <View style = {styles.button}>
           <Btn label="4" aoClicar={()=>{}}></Btn>
           <Btn label="5" aoClicar={()=>{}}></Btn>
           <Btn label="6" aoClicar={()=>{}}></Btn>
        </View>
        <View style = {styles.button}>
           <Btn label="1" aoClicar={()=>{}}></Btn>
           <Btn label="2" aoClicar={()=>{}}></Btn>
           <Btn label="3" aoClicar={()=>{}}></Btn>
        </View>
        <View style = {styles.button}>
           <Btn label="0" aoClicar={()=>{}}></Btn>
           <Btn label="." aoClicar={()=>{}}></Btn>
           <Feather name="arrow-left-circle" size={24} color="#2E9FB6" style = {styles.icon} aoClicar={()=>{}}/>
        </View>
      </SafeAreaView>
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
  button: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    alignItems: 'center',
  }
})
