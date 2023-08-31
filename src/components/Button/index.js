import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather  } from '@expo/vector-icons'; 


export default function ButtonCard(onPress){
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Feather name='repeat' size={30} color='#2E9FB6' style={{position: 'absolute', left: 10, padding: 3}}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#393939',
        borderRadius: 5,
        padding: 20,
        alignItems: 'left',

    },
})