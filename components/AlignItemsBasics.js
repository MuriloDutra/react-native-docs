import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class AlignItemsBasics extends Component{
    render(){
        return (
                <View style={{flex:1}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'baseline'}}>
                        <View style={{width: 50, height: 50,backgroundColor: 'green'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'black'}} />
                        <Text>Baseline</Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'column',justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <Text>Flex end</Text>
                        <View style={{width: 50, height: 50,backgroundColor: 'green'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'black'}} />
                    </View>

                    <View style={{flex: 1, flexDirection: 'column',justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                        <Text>Flex start</Text>
                        <View style={{width: 50, height: 50,backgroundColor: 'green'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'black'}} />
                    </View>

                    <View style={{flex: 1, flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Center</Text>
                        <View style={{width: 50, height: 50,backgroundColor: 'green'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'black'}} />
                    </View>

                    <View style={{flex: 1, flexDirection: 'column',justifyContent: 'center', alignItems: 'stretch'}}>
                        <Text>Stretch</Text>
                        <View style={{height: 50,backgroundColor: 'green'}} />
                        <View style={{height: 50, backgroundColor: 'gray'}} />
                        <View style={{height: 50, backgroundColor: 'black'}} />
                    </View>
                </View>
        )
    }
}