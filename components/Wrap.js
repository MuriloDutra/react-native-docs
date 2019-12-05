import React, { Component } from 'react'
import { View } from 'react-native'

export default class Wrap extends Component{
    render(){
        //nowrap / wrap
        return (
            <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignContent: 'flex-start'}}>
                <View style={{width: 50, height: 100, backgroundColor: 'black'}}></View>
                <View style={{width: 50, height: 100, backgroundColor: 'red'}}></View>
                <View style={{width: 50, height: 100, backgroundColor: 'orange'}}></View>
                <View style={{width: 50, height: 100, backgroundColor: 'yellow'}}></View>
                <View style={{width: 50, height: 100, backgroundColor: 'brown'}}></View>
                <View style={{width: 50, height: 100, backgroundColor: 'gray'}}></View>
                <View style={{width: 50, height: 100, backgroundColor: 'green'}}></View>
                <View style={{width: 50, height: 100, backgroundColor: 'purple'}}></View>
                <View style={{width: 50, height: 100, backgroundColor: 'lime'}}></View>
                <View style={{width: 50, height: 100, backgroundColor: 'lightseagreen'}}></View>
                <View style={{width: 50, height: 100, backgroundColor: 'hotpink'}}></View>
                <View style={{width: 50, height: 100, backgroundColor: 'saddlebrown'}}></View>
                <View style={{width: 50, height: 100, backgroundColor: 'violet', position: 'absolute', left: '50%'}}></View>
            </View>     
        )
    }
}