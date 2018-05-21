/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  FlatList,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import {  StackNavigator } from 'react-navigation';
import ProfileScreen from "./nextpage";
import MainScreen from "./first";

const Navigator = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});

export default class App extends React.Component{
 render(){
   return <Navigator/>
 }
}

