import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Platform } from 'react-native'
import ComponentIOS from './ComponentIOS'
import ComponentAndroid from './ComponentAndroid'

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
    }

    render(){
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator />
                </View>
            )
        }

        var Component = ''

        Platform.OS === 'ios' ? Component = ComponentIOS : Component = ComponentAndroid

        console.log(Component)

        return(
            <Component />
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