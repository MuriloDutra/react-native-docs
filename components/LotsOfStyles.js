import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/LotsOfStylesScss'

export default class LotsOfStyles extends Component{
    render(){
        return (
            <View style={ styles.view }>
                <Text style={ styles.red }>Just red</Text>
                <Text style={ styles.bigBlue }>Just Bigblue</Text>
                <Text style={[ styles.bigBlue, styles.red ]}>Bigblue, then red</Text>
                <Text style={[ styles.red, styles.bigBlue ]}>Red, then bigblue</Text>
            </View>
        )
    }
}