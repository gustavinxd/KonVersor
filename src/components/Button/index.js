import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 


export default function ButtonCard(){
    return(
        <View style = {styles.buttonsty}>
            <TouchableOpacity>
                <Entypo />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsty: {
      
  },

})