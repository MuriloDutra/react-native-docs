import React from 'react'
import {  View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Accessible extends React.Component {

    constructor(props){
        super(props)
        this.state = { count: 0 }
        this._onPress = this._onPress.bind(this)
    }

    _onPress(){
        this.setState({count: this.state.count + 1})
    }
    
    _pushToOtherView = () => {
        this.props.navigation.navigate('PizzaTranslator')
    }

    render(){
        return (
            <View style={ styles.container }>
                <TouchableOpacity 
                    style={ styles.button }
                    accessible={ true }
                    accessibilityLabel="Tap here!"
                    accessibilityHint="An alert is gonna show up"
                    onPress={ this._onPress }
                    accessibilityRole="button"
                >
                    <View>
                        <Text style={ styles.textButton }>Tap here!</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.button } onPress={ this._pushToOtherView }>
                        <Text style={ styles.textButton }>Push!</Text>
                </TouchableOpacity>
                <View style={ styles.textLabel }>
                    <Text accessibilityLiveRegion="polite" style={ styles.text }>{ `Number: ${this.state.count}` }</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: '50%'
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: 'blue',
        marginTop: 15
    },
    textButton: {
        marginLeft: '30%',
        marginTop: '5%',
        fontSize: 20,
        color: 'white',
    },
    textLabel: {
        height: 50,
        width: 200,
        marginTop: '10%',
        color: 'black',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
    }
})