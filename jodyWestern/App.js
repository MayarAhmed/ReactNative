/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Background} from './components/Background.js';
import {Info} from './components/Info.js';
import {Categories} from './components/screens/Categories.js';
import {Tracks} from './components/screens/Tracks.js';
import {Top} from './components/screens/Top.js';
import{Release} from './components/screens/Release.js';
import {Compile} from './components/screens/Compile.js'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {};
 class App extends Component<Props> {
  render() {
    // return (
    //   <ScrollView>
    //   <View style={styles.container}>
    //    <Background />
    //    <Info />
    //   </View>
    //   </ScrollView>
    // );
  }
}

class CategoryScreen extends React.Component {
  render() {
    return (
  <ScrollView>
      <View>
        <Background />
        <Info />
        <Categories />
        </View>
    </ScrollView>

    );
  }
}

class TracksScreen extends React.Component {
  render() {
    return (
      <ScrollView>
          <View>
        <Background />
        <Info />
        <Tracks />
        </View>
        </ScrollView>

    );
  }
}

class CompileScreen extends React.Component {
  render() {
    return (
       <ScrollView>
          <View>
        <Background />
        <Info />
        <Compile />
        </View>
        </ScrollView>

    );
  }
}

class ReleaseScreen extends React.Component {
  render() {
    return (
            <ScrollView>

          <View>
        <Background />
        <Info />
        <Release />
        </View>
        </ScrollView>

    );
  }
}

class TopScreen extends React.Component {
  render() {
    return (
            <ScrollView>

          <View>
        <Background />
        <Info />
        <Top />
        </View>
        </ScrollView>

    );
  }
}
const TabNavigator = createBottomTabNavigator({
   Category:
    { screen: CategoryScreen,
    navigationOptions:{
      tabBarLabe:'Category',
      tabBarIcon:({tintColor})=>(
<Icon name="md-bookmarks" size={30} color={tintColor} />
      )
    } },
  Top: { screen: TopScreen,
   navigationOptions:{
      tabBarLabe:'Category',
      tabBarIcon:({tintColor})=>(
<Icon name="md-flame" size={30} color={tintColor} />
      )
    } 
    },
  Release:{screen: ReleaseScreen,
   navigationOptions:{
      tabBarLabe:'Category',
      tabBarIcon:({tintColor})=>(
<Icon name="md-flash" size={30} color={tintColor} />
      )
    }
  },
  Compile :{screen:CompileScreen,
  navigationOptions:{
      tabBarLabe:'Category',
      tabBarIcon:({tintColor})=>(
<Icon name="md-switch" size={30} color={tintColor} />
      )
    }},
  Tracks :{screen: TracksScreen,
   navigationOptions:{
      tabBarLabe:'Category',
      tabBarIcon:({tintColor})=>(
<Icon name="md-pulse" size={30} color={tintColor} />
      )
    }}
});

export default createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
