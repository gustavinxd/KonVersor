import { useState } from "react";
import { Modal } from "react-native-web";

export default function AlterarConversor(){

    const [modalVisible, setModalVisible] = useState(false);
    
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        

      </Modal>
    );
}