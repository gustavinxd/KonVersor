import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { Input } from 'react-native-elements';

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style = {styles.cardContent}>
                {props.children}
                <Text style={{fontSize: 20, lineHeight: 18}}>BRL </Text>
                <Text style={{fontSize: 15, lineHeight: 37}}>Real</Text>
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