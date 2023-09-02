import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TextLight, TextRegular } from '../../Fonts/index';

const ListaValores = React.memo(
  ({ onPress, flagCurrency, currency, currencyName }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.5}
      >
        <Image src={flagCurrency} style={styles.countryImg} />
        <View style={styles.textSection}>
          <TextRegular text={currency} style={styles.currency} />
          <TextLight text={currencyName} style={styles.currencyName} />
        </View>
        <Entypo
          name="chevron-right"
          size={30}
          color="#2E9FB6"
          style={{ position: 'absolute', right: 15 }}
        />
      </TouchableOpacity>
    );
  }
);

export default ListaValores

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#393939',
    borderRadius: 8,
    padding: 15,
    gap: 15,
    alignItems: 'center'
  },
  countryImg: {
    width: 45,
    height: 32,
    borderRadius: 3
  },
  textSection: {
    flexDirection: 'column'
  },
  currency: {
    color: '#fff'
  },
  currencyName: {
    color: '#A0A0A0'
  }
});
