/* eslint-disable arrow-body-style */
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import AlterarValor from '../../components/AlterarValor/index';
import { fetchCountryFlagsByCurrencies, fetchXMLData } from '../../services/api/conversor-moedas';

export default function ConversorMoedas(){
  const [currencies, setCurrencies] = useState([]);
  const [currenciesName, setCurrenciesName] = useState([]);
  const [flagCurrencies, setFlagCurrencies] = useState([]);
  const [dataCurrency, setDataCurrency] = useState([]);
  

  useEffect(() =>{
    // Pegar dados das moedas
    fetchXMLData()
      .then(data => {
        setCurrencies(Object.keys(data));
        setCurrenciesName(Object.values(data));
      });
    
    // Pegar dados das bandeiras de cada país
    fetchCountryFlagsByCurrencies(currencies).then((data) =>{
      const infoValues = Object.values(data);
      const filterData = infoValues.map((infoValue) => ({
        data: infoValue[0]
      }))

      const flagsImg = filterData.map(item => {
          return item.data.flags.png
      })

      setFlagCurrencies(flagsImg)
      
    })
    .catch(erro =>{
      console.error(`Erro geral: ${erro.message}`)
    })

    const mergeData = currencies.map((moeda, index) => ({
      currency: moeda,
      currencyName: currenciesName[index][0],
      flagImg: flagCurrencies[index]
    }));
    
  },[])


    return(
        <View style={styles.container}>
        <Text style={styles.p}>Moedas</Text>
        <AlterarValor modalType='Valor' data={dataCurrency}/>
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
