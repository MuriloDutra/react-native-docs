import React, { Component } from 'react'
import { View } from 'react-native'

export default class FlexDirectionsBasics extends Component{
    render(){
        return (
            <View style={{flex: 1, backgroundColor: 'yellow'}}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'black'}}></View>
                </View>

                <View style={{flex: 1, flexDirection: 'column-reverse'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'black'}}></View>
                </View>

                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'black'}}></View>
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'black'}}></View>
                </View>
            </View>
        )
    }
}