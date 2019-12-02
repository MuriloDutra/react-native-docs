import React, { Component } from 'react'
import { View } from 'react-native'

export default class FlexDimensionsBasics extends Component{
    render(){
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'red'}} />
                <View style={{flex: 1, backgroundColor: 'white'}} />
                <View style={{flex: 1, backgroundColor: 'steelblue'}} />
            </View>
        )
    }
}