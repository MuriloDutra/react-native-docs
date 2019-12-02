import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class JustifyContentBasics extends Component{
    render(){
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
                    <Text>space-between</Text>
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-start'}}>
                    <Text>flex-start</Text>
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-end'}}>
                    <Text>flex-end</Text>
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
                    <Text>center</Text>
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-around'}}>
                    <Text>space-around</Text>
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                </View>
            </View>
        )
    }
}