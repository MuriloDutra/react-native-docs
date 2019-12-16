import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Platform, UIManager, LayoutAnimation} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
export default class AnimatedCollapsible extends React.Component {
  state = {expanded: false};
  render() {
    return (
      <View style={{overflow: 'hidden'}}>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            this.setState({expanded: !this.state.expanded});
          }}>
          <Text>
            Press me to {this.state.expanded ? 'collapse' : 'expand'}!
          </Text>
        </TouchableOpacity>
        {this.state.expanded && <Text>I disappear sometimes!</Text>}
      </View>
    );
  }
}