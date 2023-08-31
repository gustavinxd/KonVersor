import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { TextBold } from '../../Fonts/index';
import ListaValores from '../ListaValores/index';
import SeparatorItem from '../SeparatorItem/index';

export default function AlterarValor({ modalType, data }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [list, setList] = useState(data);

  useEffect(() => {
    if (search === '') {
      setList(data);
    } else {
      setList(
        data.filter(
          (item) =>
            item.currency.toUpperCase().indexOf(search.toUpperCase()) > -1
        )
      );
    }
  }, [search]);

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        {/* Modal container */}
        <View style={styles.container}>
          {/* Logo da equipe */}
          <View style={styles.teamLogo}>
            <FontAwesome5 name="skull" color="#fff" size={18} />
            <TextBold text="Pirate" style={styles.teamTitlePirate} />
            <TextBold text="Devs" style={styles.teamTitleDev} />
          </View>

          {/* ModalButtonClose */}
          <TouchableOpacity
            style={styles.modalClose}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Ionicons name="close" size={40} color="#2E9FB6" />
          </TouchableOpacity>

          {/* Modal Content */}
          <View style={styles.content}>
            {/* Modal Title */}
            <TextBold text={`Alterar ${modalType}`} style={styles.modalTitle} />

            {/* Modal Input Search */}
            <View style={styles.inputContainer}>
              {/* Input de pesquisa */}
              <TextInput
                value={search}
                onChangeText={(t) => setSearch(t)}
                style={styles.modalInput}
                placeholder="Pesquise por uma moeda..."
                placeholderTextColor="#ACB1B2"
                selectionColor="#ACB1B2"
              />
              {/* Icone de pesquisa */}
              <FontAwesome5
                name="search"
                size={25}
                color="#ACB1B2"
                style={styles.iconSearch}
              />
            </View>

            <FlatList
              SeparatorItem={<SeparatorItem />}
              data={list}
              renderItem={({ item }) => (
                <ListaValores
                  flagCurrency={item.flagImg}
                  currency={item.currency}
                  currencyName={item.currencyName}
                />
              )}
              keyExtractor={(item) => item.currency}
            />
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.openModal}
      >
        <FontAwesome5 name="skull" color="#fff" size={30} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0D0D0D'
  },
  teamLogo: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    left: 15
  },
  teamTitlePirate: {
    color: '#2E9FB6',
    fontSize: 16
  },
  teamTitleDev: {
    color: '#fff',
    fontSize: 16
  },
  modalClose: {
    position: 'absolute',
    top: 0,
    right: 25
  },
  openModal: {
    position: 'absolute',
    bottom: 15,
    right: 15
  },
  modalTitle: {
    color: '#2E9FB6',
    fontSize: 24
  },
  content: {
    marginHorizontal: 25,
    marginVertical: 64,
    flexDirection: 'column',
    gap: 30
  },
  inputContainer: {
    flexDirection: 'row'
  },
  modalInput: {
    flex: 1,
    backgroundColor: '#393939',
    padding: 13,
    paddingHorizontal: 60,
    color: '#ACB1B2',
    borderRadius: 8,
    fontFamily: 'InriaSans_300Light',
    fontSize: 16
  },
  iconSearch: {
    position: 'absolute',
    left: 16,
    top: 13
  }
});
