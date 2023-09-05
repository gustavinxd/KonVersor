import React from 'react';
import { StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

export default function Btn ({children, onPress, value}){

    return(
        <TouchableHighlight
            onPress={onPress} style = {styles.btn} value = {value}
        >
            {children}
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btn:{
        height: Dimensions.get('window').width/4.7,
        width: Dimensions.get('window').width/3.5,
        // padding: ,
        backgroundColor: '#05080A',
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',

    },
});