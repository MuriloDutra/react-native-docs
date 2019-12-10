import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'

export default class PizzaTranslator extends Component{

    static navigationOptions = { 
        title: 'Welcome meu consagrado!'
    }

    constructor(props){
        super(props)
        this.state = { text: '' }
    }

    render(){
        const {navigate} = this.props.navigation

        return (
            <View style={{padding: 10}}>
                <TextInput 
                    style={{height: 70, fontSize: 20}}
                    placeholder='Type here my friend...'
                    onChangeText={(text) => this.setState({text: text})}
                    value={this.state.text}
                />
                <Text style={{padding:10, fontSize: 42}}>
                    {this.state.text.split(' ').map(word => word && '🍕').join(' ')}
                </Text>

                <TouchableOpacity onPress={() => navigate('Grettings', {name: 'Jane'}) } >
                    <View style={ styles.button }>
                        <Text style={ styles.buttonText }>Send</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    }
})