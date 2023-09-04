/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { TextLight, TextRegular } from '../../Fonts/index';
import { DATA_MEDIDAS_CONV, UNIDADES_DATA } from '../../services/api/conversor-medidas';
import AlterarUnidade from '../../components/AlterarUnidade/index';

export default function ConversorMedidas() {

  // unidadeReq refere-se a unidade em que quer descobrir seu valor em outra unidade
  const [unidadeReq, setUnidadeReq] = useState({
    nome: 'Metro',
    simbolo: 'm'
  });

  // unidadeRes refere-se a unidade resposta da conversão 
  const [unidadeRes, setUnidadeRes] = useState({
    nome: 'Centímetro',
    simbolo: 'cm'
  });

  // Valor de entrada da conversão entre as unidades
  const [valueReq, setValueReq] = useState('0');

  // Valor de saída da conversão entre as unidades
  const [valueRes, setValueRes] = useState('');

  // Valor de conversão em que é multiplicado com o valor de entrada

  const [conversion, setConversion] = useState(0);

  // useEffect responsável por filtrar os dados de conversão e pegar o fator de conversão entre as unidades

  useEffect(() => {

    if( unidadeReq.simbolo !== unidadeRes.simbolo){
      const convType = `${unidadeReq.simbolo}-${unidadeRes.simbolo}`

      const findConversion = DATA_MEDIDAS_CONV.find((item) => item.nome === convType)

      setConversion(findConversion.fatorConversao)

    } else {
      setConversion(1)
    }

  }, [unidadeReq, unidadeRes]);

  // useEffect responsável por calcular o valor de conversão inserido no campo de texto

  useEffect(() => {

    if (valueReq === '') {
      setValueRes('0');
    }else{
      setValueRes(String(parseFloat((valueReq) * conversion).toFixed(2)));
    }

  }, [valueReq, valueRes, unidadeReq, unidadeRes]);

  return (
    <View style={styles.container}>
      
      {/* Card 1 */}
      <View style={styles.card}>
        <View style={styles.cardTop}>

          <View style={styles.textsView}>
            <TextRegular
              text={unidadeReq.nome}
              style={{ color: '#FFF' }}
            />
            <TextLight
              text={unidadeReq.simbolo}
              style={{ color: '#A0A0A0' }}
            />
          </View>
        </View>

        {/* Botao que abre a modal que muda a moeda de conversão */}
        <View style={styles.modalButton}>
          <AlterarUnidade data={UNIDADES_DATA} getValue={setUnidadeReq} resetField={setValueReq} />
        </View>

        {/* Input que mostra o valor selecionado para conversão */}
        <TextInput
          style={styles.inputCard}
          value={valueReq}
          onChangeText={(t) => setValueReq(t)}
          keyboardType='numeric'
          clearTextOnFocus
          placeholder='Insira um valor ...'
          placeholderTextColor='#ACB1B2'
        />
      </View>

      {/* Botao de inverter os valores de conversão */}
      <TouchableOpacity
        style={styles.switchBtn}
        onPress={() => {
          setUnidadeReq(unidadeRes);
          setUnidadeRes(unidadeReq);
          setValueReq('0')
        }}
      >
        <Octicons name="arrow-switch" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Card 2 */}
      <View style={styles.card}>
        <View style={styles.cardTop}>

          <View style={styles.textsView}>
            <TextRegular
              text={unidadeRes.nome}
              style={{ color: '#fff' }}
            />
            <TextLight
              text={unidadeRes.simbolo}
              style={{ color: '#A0A0A0' }}
            />
          </View>
        </View>

        {/* Botao que abre a modal que muda a moeda de conversão */}
        <View style={styles.modalButton}>
          <AlterarUnidade data={UNIDADES_DATA} getValue={setUnidadeRes} resetField={setValueRes} />
        </View>

        {/* Input que mostra o valor selecionado para conversão */}
        <TextInput
          style={styles.inputCard}
          editable={false}
          value={valueRes}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    flexDirection: 'column',
    gap: 25,
    flex: 1,
    padding: 15,
    paddingTop: 45
  },
  p: {
    color: '#fff'
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
  }
});
