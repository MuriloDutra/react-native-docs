import React, { Component } from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'

export default class FlatListBasics extends Component{

    _renderTextComponent(text){
        return ( 
            <Text onPress={ () => alert(text) } style={ styles.item }> { text } </Text> 
        )
    }

    render(){
        return (
            <View style={ styles.container }>
                <FlatList 
                    data={[
                        {key: 'Margot Robbie'},
                        {key: 'Leonardo Dicaprio'},
                        {key: 'Samuel Jackson'},
                        {key: 'Jason Mamoa'},
                        {key: 'Emilia Clarke'},
                        {key: 'Brad Pitt'},
                        {key: 'Tarantino'},
                        {key: 'Robert De Niro'},
                        {key: 'Sharon Tate'},
                        {key: 'Chris Evans'},
                      ]}
                    renderItem={ ({item}) => this._renderTextComponent(item.key)}
                    maxToRenderPerBatch={ 10 }
                >
                </FlatList>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        paddingTop: 10
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
} 