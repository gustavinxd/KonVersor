/* eslint-disable no-console */
import axios from 'axios';
import { parseString } from 'react-native-xml2js'; // Certifique-se de usar a versão compatível com React Native

const apiUrlCurricies = "https://economia.awesomeapi.com.br/xml/available/uniq";
const apiUrlConvertor = "https://economia.awesomeapi.com.br/json/";
const apiUrlCountryflag = "https://restcountries.com/v3.1/currency/";

// *Observação: as funções parseStringPromise(), fetchXMLData(), fetchCountryFlagsByCurrencies() 
// foram utilizadas para extrair um array de objetos onde contém todas as moedas, nome das moedas e bandeira de seus respectivos países
// e armazenado na pasta data o resultado.

// Transforma dados XML em um objeto JSON
async function parseStringPromise(xml) {
    return new Promise((resolve, reject) => {
      parseString(xml, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }


// Função que consome API XML que contém todas as moedas que podem ser convertidas
async function fetchXMLData() {
  try {
    const response = await axios.get(apiUrlCurricies);

    const xmlText = await response.data;

    const parsedData = await parseStringPromise(xmlText);

    const currencies = parsedData.xml;

    return currencies;
  } catch (error) {
    console.error("Erro ao buscar os dados XML:", error);
    return [];
  }
}

// Função que pesquisa por países a partir de sua moeda, foi extraído a bandeira como dado.
async function fetchCountryFlagsByCurrencies(currencies){
  const results = await Promise.all(currencies.map(async (currency) =>{
    try{
      const response = await axios.get(`${apiUrlCountryflag}${currency}`)
      return response.data
    }catch(erro){
      return [{flags:{png: 'https://flagcdn.com/w320/br.png'}}];
    }
  }));

  return results
}

// Função que retorna valor da cotação entre duas moedas
async function fetchConvertor (curricieInput, curricieResult){
  try{
    const response = await axios.get(`${apiUrlConvertor}${curricieInput}-${curricieResult}`)
    return response.data[0]
  }catch(error){
    // console.log('Erro', error)
    return [];
  }
}



export {fetchXMLData, fetchConvertor, fetchCountryFlagsByCurrencies};