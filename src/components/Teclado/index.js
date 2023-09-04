import React from 'react';
import { StyleSheet, Text, TouchableHighlight, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'

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
        fontSize: 25,
        height: Dimensions.get('window').width/4.6,
        width: Dimensions.get('window').width/3,
        padding: 22,
        backgroundColor: '#05080A',
        color: '#FFF',
        textAlign: 'center',
    },
    Icon:{
        height: Dimensions.get('window').width/5,
        width: Dimensions.get('window').width/3.5,
        padding: 10,
        backgroundColor: '#05080A',
        color: '#FFF',
        textAlign: 'center',
        borderColor: '#FFF',
        borderWidth: 1,
    },
    btnClear: {
        color: '#2E9FB6',
    }
});