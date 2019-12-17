/**
 * @format
 * @flow
 */

import React from 'react';

import SaySomething from './components/SaySomething'
import ImageExample from './components/ImageExample'
import LotsOfGretting from './components/LotsOfGrettings'
import Blink from './components/Blink'
import LotsOfStyles from './components/LotsOfStyles'
import FixedDimensionsBasics from './components/FixedDimensionsBasics'
import FlexDimensionsBasics from './components/FlexDimensionsBasics'
import FlexDirectionsBasics from './components/FlexDirectionsBasics'
import JustifyContentBasics from './components/JustifyContentBasics'
import AlignItemsBasics from './components/AlignItemsBasics'
import AlignSelf from './components/AlignSelf'
import AlignContent from './components/AlignContent'
import Wrap from './components/Wrap'
import PizzaTranslator from './components/PizzaTranslator'
import ButtonBasics from './components/ButtonBasics'
import Touchables from './components/Touchables'
import ScrollViewBasics from './components/ScrollViewBasics'
import FlatListBasics from './components/FlatListBasics'
import SectionListBasics from './components/SectionListBasics'
import FetchExample from './components/FetchExample'
import AnimatedButton from './components/Animation'
import AnimationExample02 from './components/AnimationExample02'
import Accessible from './components/Accessible'

//NAVIGATION IMPORTS
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Navigation } from 'react-native-navigation'

import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { Header, LearnMoreLinks, Colors,  DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

//REACT-NATIVE-NAVIGATION
Navigation.registerComponent("ReactNativeNavigationV1.Accessible", () => Accessible)
Navigation.registerComponent("ReactNativeNavigationV1.PizzaTranslator", () => PizzaTranslator)
Navigation.registerComponent("ReactNativeNavigationV1.ImageExample",() => ImageExample)

Navigation.startSingleScreenApp({
  screen: {
    screen: "ReactNativeNavigationV1.Accessible",
    title: "Home"
  }
})

/*REACT-NAVIGATION
const MainNavigator = createStackNavigator({
  Home: {
    screen: Accessible, 
    navigationOptions: { title: 'Accessible S creen'} 
  },
  PizzaTranslator: {
    screen: PizzaTranslator,
    navigationOptions: { title: 'Speak pizza!' }
  },
  ImageExample: {
    screen: ImageExample,
    navigationOptions: { title: 'Captain Marvel' }
  }
});*/

const App = createAppContainer(MainNavigator)

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;