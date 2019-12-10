import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Platform } from 'react-native'

import Button from './platforms/Button'

export default class FetchExample extends Component {
    
    constructor(props){
        super(props)
        this.state = { isLoading: true }
    }

    async componentDidMount(){
        let data = await getMoviesFromApi()
        this.setState({
            isLoading: false,
            dataSource: data,
        })

        var Component = () => {
            if(Platform.OS === 'ios'){
                return(
                    <View style={ styles.container }>
                        <Text>HELLO IOS</Text>
                        <FlatList
                            data={ this.state.dataSource }
                            renderItem={({item}) => <Text style={ styles.item }>{ item.title }, { item.releaseYear }</Text> }
                            keyExtractor={({id}, index) => id}
                        />
                    </View>
                )
            }else if(Component.OS === 'android'){ 
                return(
                    <View style={ styles.container }>
                        <FlatList
                            data={ this.state.dataSource }
                            renderItem={({item}) => <Text style={ styles.item }>{ item.title }, { item.releaseYear }</Text> }
                            keyExtractor={({id}, index) => id}
                        />
                    </View>
                )
            }
        }
    }

    render(){
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator />
                </View>
            )
        }

        let platformVersion = Platform.Version

        return(
            <View style={ styles.container }>
                <Text style={ styles.item }>Versão Android: { platformVersion } </Text>
                <FlatList
                    data={ this.state.dataSource }
                    renderItem={({item}) => <Text style={ styles.item }>{ item.title }, { item.releaseYear }</Text> }
                    keyExtractor={({id}, index) => id}
                />
                <Button></Button>
            </View>
        )
    }
}

async function getMoviesFromApi() {
    try {
        let response = await fetch('https://facebook.github.io/react-native/movies.json');
        let responseJson = await response.json();
        return responseJson.movies;
    } catch (error) {
        console.error(error);
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

/**
 * return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
 */