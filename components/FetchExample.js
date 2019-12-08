import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View } from 'react-native'

export default class FetchExample extends Component {

    constructor(props){
        super(props)
        console.log('PROPS: ', props)
        this.state = { isLoading: true }
    }

    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
                    .then(response => response.json())
                    .then(responseJson => {
                        
                        this.setState({
                            isLoading: false,
                            dataSource: responseJson.movies
                        }, () => {})
                    })
                    .catch(error => {
                        console.log('ERROR: ', error)
                    })
    }

    render(){
        return (

        )
    }
}