import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
// import { ButtonCard } from '../../components/Button/index';

export default function Card(){
    return(
        <View style={styles.card}>
            <Input
            
            />
        </View>

    )
}

// const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    card: {
      borderRadius: 8,
      backgroundColor: '#393939',
    //   width: deviceWidth - 10,
      height: 130,
  },
      cardContent:{
        padding: 20,
  }
})