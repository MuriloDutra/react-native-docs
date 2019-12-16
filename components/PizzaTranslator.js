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

    componentDidMount(){
        alert('Bem vindo! O componente acabou de ser montado.')
    }

    componentDidUpdate(){
        console.log('Componente foi atualizado')
    }

    componentWillUnmount(){
        alert('Tchau, te vejo na próxima tela, pois o componente está sendo desmontado.')
    }

    takeToOtherPage(){
        const {navigate} = this.props.navigation
        navigate('Grettings', {name: 'Jane'})
    }

    render(){
        let backgroundColor = this.props.backgroundColor
        
        return (
            <View style={{padding: 10, backgroundColor: backgroundColor, flex: 1}}>
                <TextInput 
                    style={{height: 70, fontSize: 20}}
                    placeholder='Type here my friend...'
                    onChangeText={(text) => this.setState({text: text})}
                    value={this.state.text}
                />
                <Text style={{padding:10, fontSize: 42}}>
                    {this.state.text.split(' ').map(word => word && '🍕').join(' ')}
                </Text>

                <TouchableOpacity onPress={() => this.takeToOtherPage() } >
                    <View style={ styles.button }>
                        <Text style={ styles.buttonText }>Send</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }  
}

PizzaTranslator.defaultProps = {
    backgroundColor: 'azure'}

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