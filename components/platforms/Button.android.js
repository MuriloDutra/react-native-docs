import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export default class Button extends Component {
    render(){
        return (
            <TouchableOpacity onPress={() => alert('Android version')}>
                <View style={ styles.button }>
                    <Text style={ styles.buttonText }>HELLO ANDROID</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    }
})