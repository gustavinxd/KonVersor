/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import AlterarValor from '../../components/AlterarValor/index';
import { fetchConvertor } from '../../services/api/conversor-moedas';
import DATA_CURRENCY from '../../data';
import { TextLight, TextRegular } from '../../Fonts/index';


export default function ConversorMoedas() {
  const [value, setValue] = useState({currency: 'BRL', currencyName: 'Real Brasileiro', flagImg: 'https://flagcdn.com/w320/br.png'});
  // const [value2, setValue] = useState({currency: 'BRL', currencyName: 'Real Brasileiro', flagImg: 'https://flagcdn.com/w320/br.png'});

  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <View style={styles.cardTop}>

          <View style={styles.imgView}>
            <Image src={value.flagImg} style={styles.flagImg}/>
          </View>

          <View style={styles.textsView}>
            <TextRegular text={value.currency} style={styles.p}/>
            <TextLight text={value.currencyName} style={styles.p}/>
          </View>

          <View style={styles.modalButton}>
            <AlterarValor data={DATA_CURRENCY} getValue={setValue}/>
          </View>

        </View>

        <View style={styles.cardBottom}>
          <TextInput style={styles.inputCard}/>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    flex: 1,
    padding: 15,
    paddingTop: 25
  },
  p: {
    color: '#fff'
  },
  card:{
    backgroundColor: '#393939',
    flexDirection: 'column',
    borderRadius: 8,
    padding: 15,
    gap: 15,
  },
  cardTop:{
    flexDirection: 'row',
    gap: 15,
    position: 'relative'
  },
  imgView:{
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  flagImg:{
    width: 45,
    height: 32,
    borderRadius: 3
  },
  modalButton:{
    position:'absolute',
    right: 0
  },
  inputCard:{
    color: '#fff',
  }
});
