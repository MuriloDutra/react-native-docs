import React, { Component } from 'react'
import SaySomething from './SaySomething'
import { View } from 'react-native'

export default class  LotsOfGretting extends Component {
    
    static navigationOptions = { 
        title: 'Grettings'
    }

    render(){
        return (
            <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
                <SaySomething text={'Hello, how are you?'}/>
                <SaySomething text={'Hey man!'}/>
                <SaySomething text={'Good Morning!'}/>
            </View>
        )
    }   
}