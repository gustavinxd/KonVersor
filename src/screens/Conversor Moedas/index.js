/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import { Octicons, Feather } from '@expo/vector-icons';
import AlterarValor from '../../components/AlterarValor/index';
import { fetchConvertor } from '../../services/api/conversor-moedas';
import DATA_CURRENCY from '../../data';
import { TextLight, TextRegular } from '../../Fonts/index';
import Btn from '../../components/Teclado/index';

export default function ConversorMoedas() {

  // CurrencyReq refere-se a moeda em que quer descobrir seu valor em outra moeda
  const [currencyReq, setCurrencyReq] = useState({
    currency: 'BRL',
    currencyName: 'Real Brasileiro',
    flagImg: 'https://flagcdn.com/w320/br.png'

    // CurrencyRes refere-se a moeda resposta da conversão
  });
  const [currencyRes, setCurrencyRes] = useState({
    currency: 'USD',
    currencyName: 'Dólar Americano',
    flagImg: 'https://flagcdn.com/w320/us.png'
  });

  // Valor de entrada da conversão entre as moedas
  const [valueReq, setValueReq] = useState('');

  // Valor de saída da conversão entre as moedas
  const [valueRes, setValueRes] = useState('');

  // Valor de conversão em que é multiplicado com o valor de entrada
  const [conversion, setConversion] = useState(0);

  // useEffect responsável por consumir a API que contem o valor de conversão entre as moedas
  useEffect(() => {
    if (currencyReq.currency !== currencyRes.currency) {
      fetchConvertor(currencyReq.currency, currencyRes.currency).then(
        (data) => {
          setConversion(parseFloat(data.bid));
        }
      );
    } else {
      setConversion(1);
    }
  }, [currencyReq, currencyRes]);

  // useEffect responsável por calcular o valor de conversão inserido no campo de texto
  useEffect(() => {
    if (valueReq === '') {
      setValueRes('0');
    } else {
      setValueRes(String(parseFloat(valueReq * conversion).toFixed(3)));
    }
  }, [valueReq, valueRes, currencyReq, currencyRes]);

  return (
    <View style={styles.container}>
      <View style={styles.containerCards}>
        {/* Card 1 */}
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.imgView}>
              <Image src={currencyReq.flagImg} style={styles.flagImg} />
            </View>
            <View style={styles.textsView}>
              <TextRegular
                text={currencyReq.currency}
                style={{ color: '#FFF' }}
              />
              <TextLight
                text={currencyReq.currencyName}
                style={{ color: '#A0A0A0' }}
              />
            </View>
          </View>
          {/* Botao que abre a modal que muda a moeda de conversão */}
          <View style={styles.modalButton}>
            <AlterarValor
              data={DATA_CURRENCY}
              getValue={setCurrencyReq}
              resetField={setValueReq}
            />
          </View>
          {/* Input que mostra o valor selecionado para conversão */}
          <TextInput
            style={styles.inputCard}
            value={valueReq}
            keyboardType="numeric"
            clearTextOnFocus
            placeholder="Insira um valor ..."
            placeholderTextColor="#ACB1B2"
            editable={false}
          />
        </View>
        {/* Botao de inverter os valores de conversão */}
        <TouchableOpacity
          style={styles.switchBtn}
          onPress={() => {
            setCurrencyReq(currencyRes);
            setCurrencyRes(currencyReq);
            setValueReq('');
          }}
        >
          <Octicons name="arrow-switch" size={24} color="#fff" />
        </TouchableOpacity>
        {/* Card 2 */}
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.imgView}>
              <Image src={currencyRes.flagImg} style={styles.flagImg} />
            </View>
            <View style={styles.textsView}>
              <TextRegular
                text={currencyRes.currency}
                style={{ color: '#fff' }}
              />
              <TextLight
                text={currencyRes.currencyName}
                style={{ color: '#A0A0A0' }}
              />
            </View>
          </View>
          {/* Botao que abre a modal que muda a moeda de conversão */}
          <View style={styles.modalButton}>
            <AlterarValor
              data={DATA_CURRENCY}
              getValue={setCurrencyRes}
              resetField={setValueRes}
            />
          </View>
          {/* Input que mostra o valor selecionado para conversão */}
          <TextInput
            style={styles.inputCard}
            editable={false}
            value={valueRes}
          />
        </View>
      </View>

      <View style={styles.barra} />

      {/* Teclado */}
      <View style={styles.containerbutton}>
        <View style={styles.button}>
          <Btn onPress={() => {setValueReq(`${valueReq}7`)}} hasText text="7" />
          <Btn onPress={() => {setValueReq(`${valueReq}8`)}} hasText text="8" />
          <Btn onPress={() => {setValueReq(`${valueReq}9`)}} hasText text="9" />
        </View>
        <View style={styles.button}>
          <Btn onPress={() => {setValueReq(`${valueReq}4`)}} hasText text="4" />
          <Btn onPress={() => {setValueReq(`${valueReq}5`)}} hasText text="5" />
          <Btn onPress={() => {setValueReq(`${valueReq}6`)}} hasText text="6" />
        </View>
        <View style={styles.button}>
          <Btn onPress={() => {setValueReq(`${valueReq}1`)}} hasText text="1" />
          <Btn onPress={() => {setValueReq(`${valueReq}2`)}} hasText text="2" />
          <Btn onPress={() => {setValueReq(`${valueReq}3`)}} hasText text="3" />
        </View>
        <View style={styles.button}>
          <Btn onPress={() => {setValueReq(`${valueReq}0`)}} hasText text="0" />
          <Btn onPress={() => {setValueReq(`${valueReq}.`)}} hasText text="." />
          <Btn onPress={() => {setValueReq(valueReq.slice(0, -1))}}>
            <Feather name="delete" size={24} color="#2E9FB6" />
          </Btn>
        </View>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    flexDirection: 'column',
    flex: 1
  },
  containerCards: {
    backgroundColor: '#0D0D0D',
    flexDirection: 'column',
    gap: 15,
    flex: 1,
    padding: 15
  },
  p: {
    color: '#fff',
    fontSize: 24
  },
  card: {
    backgroundColor: '#393939',
    flexDirection: 'column',
    borderRadius: 8,
    padding: 15,
    gap: 15
  },
  cardTop: {
    flexDirection: 'row',
    gap: 15
  },
  imgView: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  flagImg: {
    width: 45,
    height: 32,
    borderRadius: 3
  },
  modalButton: {
    position: 'absolute',
    right: 15,
    top: 30
  },
  inputCard: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'InriaSans_400Regular',
    borderBottomWidth: 2,
    borderColor: '#D9D9D9',
    padding: 5,
    paddingVertical: 10
  },
  switchBtn: {
    backgroundColor: '#393939',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 45,
    borderRadius: 8
  },
  button: {
    flexDirection: 'row',
    gap: 20
  },
  containerbutton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#05080A'
  },
  barra: {
    backgroundColor: '#2E9FB6',
    height: 2
  }
});
