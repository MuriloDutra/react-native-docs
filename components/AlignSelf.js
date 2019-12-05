import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class AlignSelf extends Component{
    render(){
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-end'}}>
                <View style={{width: 50, height:50, backgroundColor: 'red', alignSelf: 'flex-start'}}></View>
                <View style={{width: 50, height:50, backgroundColor: 'blue', alignSelf: 'center'}}></View>
                <View style={{width: 50, height:50, backgroundColor: 'black'}}></View>
                <View style={{height:50, backgroundColor: 'green', alignSelf: 'stretch'}}></View>
            </View>
        )
    }
}