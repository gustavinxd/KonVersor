import React from 'react';
import { StyleSheet, Text, TouchableHighlight, Dimensions } from 'react-native';

export default props=>{

    const stylesbutton = [styles.btn]

    if(props.Clear){
         stylesbutton.push(styles.btnClear)
    }

    return(
        <TouchableHighlight
            onPress={props.aoClicar}
        >
            <Text style = {stylesbutton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btn:{
        fontSize: 30,
        height: Dimensions.get('window').width/3,
        width: Dimensions.get('window').width/3,
        padding: 20,
        backgroundColor: '#05080A',
        color: '#FFF',
        textAlign: 'center',
    },
    btnClear: {
        color: '#2E9FB6',
    }
});