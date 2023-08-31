import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { ButtonCard } from '../../components/Button/index';

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style = {styles.cardContent}>
                {props.children}
            
                    <Input
                    
                    />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 7,
      backgroundColor: '#393939',
      elevation: 8,
      
  },
      cardContent:{
        padding: 20,
  }
})