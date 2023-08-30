import React, { useState } from "react";
import { Modal, Text } from "react-native";

export default function AlterarConversor(){

    const [modalVisible, setModalVisible] = useState(false);
    
    return (
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
      <Text>Oiiiiii</Text>
      </Modal>
    );
}