import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TextLight, TextRegular } from '../../Fonts/index';

const ListaUnidades = React.memo(
  ({ onPress, nome, simbolo }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.5}
      >
        <View style={styles.textSection}>
          <TextRegular text={nome} style={styles.nomeUnidade} />
          <TextLight text={simbolo} style={styles.simbolo} />
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

export default ListaUnidades

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
  nomeUnidade: {
    color: '#fff'
  },
  simbolo: {
    color: '#A0A0A0'
  }
});
