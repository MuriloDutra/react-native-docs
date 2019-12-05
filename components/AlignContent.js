import React, { Component } from 'react'
import { View } from 'react-native'


export default class AlignContent extends Component{
    render(){
        //flex-start / flex-end / stretch / center / space-between / space-around
        return (
            <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignContent: 'stretch'}}>
                <View style={{height: 100, backgroundColor: 'black'}}></View>
                <View style={{height: 100, backgroundColor: 'red'}}></View>
                <View style={{height: 100, backgroundColor: 'orange'}}></View>
                <View style={{height: 100, backgroundColor: 'yellow'}}></View>
                <View style={{height: 100, backgroundColor: 'brown'}}></View>
                <View style={{height: 100, backgroundColor: 'gray'}}></View>
                <View style={{height: 100, backgroundColor: 'green'}}></View>
                <View style={{height: 100, backgroundColor: 'purple'}}></View>
                <View style={{height: 100, backgroundColor: 'lime'}}></View>
                <View style={{height: 100, backgroundColor: 'lightseagreen'}}></View>
                <View style={{height: 100, backgroundColor: 'hotpink'}}></View>
                <View style={{height: 100, backgroundColor: 'saddlebrown'}}></View>
                <View style={{height: 100, backgroundColor: 'violet'}}></View>
            </View>             
        )
    }
}