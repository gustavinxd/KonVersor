import React, { useState } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { TextBold } from '../../Fonts/index';

export default function AlterarValor({modalType}) {
  const [modalVisible, setModalVisible] = useState(false);

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
            <Ionicons name='close' size={40} color="#2E9FB6"/>
          </TouchableOpacity>

          {/* Modal Content */}
          <View style={styles.content}>

            {/* Modal Title */}
            <TextBold text={`Alterar ${modalType}`} style={styles.modalTitle}/>

            <TextInput 
              style={styles.modalInput}
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
        <FontAwesome5 name='skull' color='#fff' size={30}/>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'#0D0D0D'
  },
  modalClose: {
    position: 'absolute',
    top: 0,
    right: 25
  },
  openModal: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  teamLogo:{
    flexDirection: 'row',
    position:'absolute',
    top: 5,
    left: 15,
  },
  teamTitlePirate:{
    color: '#2E9FB6',
    fontSize: 16,

  },
  teamTitleDev:{
    color: '#fff',
    fontSize: 16,

  },
  modalTitle:{
    color: '#2E9FB6',
    fontSize: 24,
  },
  content:{
    marginHorizontal: 25,
    marginVertical: 64,
    flexDirection: 'column',
    gap: 25
  },
  modalInput:{
    backgroundColor: '#191919',
    padding: 12,
    color: '#ACB1B2',
    borderRadius: 8
  }

});
