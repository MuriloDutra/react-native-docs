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
                    onPress={ this._onPress }
                    accessibilityHint="An alert is gonna show up"
                    accessibilityRole="button"
                    accessibilityViewIsModal={ true }
                >
                    <View>
                        <Text style={ styles.textButton }>Tap here!</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.button } onPress={ this._pushToOtherView }>
                        <Text style={ styles.textButton }>Push!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.button } accessibilityElementsHidden={ true }>
                        <Text style={ styles.textButton }>ElementsHidden</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.button } onAccessibilityTap={ () => alert('onAccessibilityTap') }>
                        <Text style={ styles.textButton }>Tap (double tapping) </Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.button } importantForAccessibility="yes" onMagicTap={ () => alert('onMagicTap') }>
                        <Text style={ styles.textButton }>MagicTap db-tap two fingers </Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.button } importantForAccessibility="yes">
                        <Text style={ styles.textButton }>importantForAccessibility</Text>
                </TouchableOpacity>

                <View style={ styles.textLabel }>
                    <Text accessibilityLiveRegion="polite" style={ styles.text }>{ `Number: ${this.state.count}` }</Text>
                </View>

                <View
                    accessible={true}
                    accessibilityActions={[
                        {name: 'cut', label: 'cut'},
                        {name: 'copy', label: 'copy'},
                        {name: 'paste', label: 'paste'},
                    ]}
                    onAccessibilityAction={(event) => {
                        switch (event.nativeEvent.actionName) {
                        case 'cut':
                            Alert.alert('Alert', 'cut action success');
                            break;
                        case 'copy':
                            Alert.alert('Alert', 'copy action success');
                            break;
                        case 'paste':
                            Alert.alert('Alert', 'paste action success');
                            break;
                        }
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: '10%'
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: 'blue',
        marginTop: 15
    },
    textButton: {
        marginLeft: '3%',
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