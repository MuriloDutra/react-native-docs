import React from 'react'
import { NativeModules, LayoutAnimation, Text, TouchableOpacity, StyleSheet, View } from 'react-native'

const { UIManager } = NativeModules

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)

export default class AnimationExample02 extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            width: 100,
            height: 100,
        }
    }

    _onPress = () => {
        //Animate the update            
        LayoutAnimation.spring()
        this.setState({ width: this.state.width +15, height: this.state.height +15})
    }

    render(){
        return (
            <View style={ styles.container }>
                <View style={[ styles.box, { width: this.state.width, height: this.state.height }]} />
                <TouchableOpacity onPress={ this._onPress }>
                    <View style={ styles.button }>
                        <Text style={ styles.buttonText }>
                            Press me!
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        backgroundColor: 'red',
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})