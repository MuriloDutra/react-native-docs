import React, { Component } from 'react'
import { SectionList, View, Text, StyleSheet } from 'react-native'

export default class SectionListBasics extends Component {
    
    _renderItem(text){
        return ( 
            <Text onPress={ () => alert(text) } style={ styles.item }> { text } </Text>
        )
    }

    _renderTitle(section){
        return ( 
            <Text style={styles.sectionHeader}>{ section.title }</Text>
        )
    }

    render() {
    return (
      <View style={ styles.container }>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => this._renderItem(item)}
          renderSectionHeader={({section}) => this._renderTitle(section)}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  