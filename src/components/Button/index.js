import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ButtonCard(onPress){
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AntDesign name="swap" size={30} color='#fff' style={{position: 'absolute', padding: 9}}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191919',
        borderRadius: 5,
        padding: 24,
        alignItems: '',
        width: 30,
    },
})