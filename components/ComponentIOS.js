import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Platform } from 'react-native'

export default class ComponentIOS extends Component {
    constructor(props){
        super(props)
        //AQUIIII
    }

    render(){
        return (
            <View style={ styles.container }>
                <Text>HELLO IOS</Text>
                <FlatList
                    data={ this.state.dataSource }
                    renderItem={({item}) => <Text style={ styles.item }>{ item.title }, { item.releaseYear }</Text> }
                    keyExtractor={({id}, index) => id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 20,
        ...Platform.select({
            ios: { backgroundColor: 'yellow'},
            android: { backgroundColor: 'green'}
        }),
        alignItems: Platform.OS === 'ios' ? 'flex-start' : 'center',
    },
    item: {
        color: 'white'
    }
})