import React, { useEffect, useState, Component } from 'react'
import SaySomething from './SaySomething'
import { View } from 'react-native'

export default class Blink extends Component { 
    
    componentDidMount(){
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText}
            ))
        ), 1000)
    }

    state = { isShowingText: true }

    render(){
        if (!this.state.isShowingText){
            return null;
        }

        return (
            <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
                <SaySomething text='Roubar caçapa'/>
                <SaySomething text='U1000D'/>
                <SaySomething text='Juliete Zika'/>
            </View>
        );
    }
}