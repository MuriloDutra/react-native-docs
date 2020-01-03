import React, { Component } from 'react'
import { InteractionManager, FlatList,  View, Text, StatusBar }  from 'react-native'

export default class FlatListBasics extends Component{

    _renderTextComponent(text){
        return ( 
            <Text onPress={ () => alert(text) } style={ styles.item }> { text } </Text> 
        )
    }

    componentDidMount(){
        InteractionManager.runAfterInteractions(() => { console.log('hello')})
    }

    render(){
        return (
            <View style={ styles.container }>
                <StatusBar backgroundColor="blue" hidden={true} barStyle='light-content'/>
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
                        {key: 'Amy Adams'},
                        {key: 'Javier Bardem'},
                        {key: 'Wooody Harrelson'},
                        {key: 'Victoria Pedretti'},
                        {key: 'Tom Holland'},
                        {key: 'Robert Downey Jr'},
                        {key: 'Scarlett Johansson'},
                        {key: 'Al Pacino'},
                        {key: 'Marlon Brando'},
                        {key: 'Emma Watson'},
                        {key: 'Emma Stone'},
                        {key: 'Jennifer Lawrence'},
                        {key: 'Bradley Cooper'},
                        {key: 'Joaquin Phoenix'},
                        {key: 'Erin Moriarty'},
                        {key: 'Antony Starr'},
                      ]}
                    renderItem={ ({item}) => this._renderTextComponent(item.key)}
                    maxToRenderPerBatch={ 10 }
                    updateCellsBatchingPeriod={50}
                    initialNumToRender={15}
                    windowSize={21}
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