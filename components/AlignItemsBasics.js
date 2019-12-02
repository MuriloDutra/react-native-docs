import React, { Component } from 'react'
import { View } from 'react-native'

export default class AlignItemsBasics extends Component{
    render(){
        return (
                <View style={{flex: 1, flexDirection: 'column',justifyContent: 'center', alignItems: 'stretch'}}>
                    <View style={{height: 50,backgroundColor: 'green'}} />
                    <View style={{height: 50, backgroundColor: 'gray'}} />
                    <View style={{height: 50, backgroundColor: 'black'}} />
              </View>
        )
    }
}