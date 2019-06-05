import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { NativeRouter, Link } from 'react-router-native';
import { Navigation, Card } from 'react-router-navigation';

 const Tabs = () => {
    return (
<View style={styles.containerBtn}>
        <TouchableHighlight
         
         style={styles.btnTab}>
         <Text> Home </Text>
        </TouchableHighlight>

         <TouchableHighlight
         
         style={styles.btnTab}>
         <Text> Sey </Text>
        </TouchableHighlight>

         <TouchableHighlight
        
         style={styles.btnTab}>
         <Text> dff </Text>
        </TouchableHighlight>

         <TouchableHighlight
         
         style={styles.btnTab}>
         <Text> Hofffme </Text>
        </TouchableHighlight>

         <TouchableHighlight
         
         style={styles.btnTab}>
         <Text> ss </Text>
        </TouchableHighlight>
 </View>
) 
 }

const styles = StyleSheet.create({

containerBtn:{
  flex:1,
  flexDirection:'row',
  flexWrap: 'wrap',
},
btnTab:{
  width: Dimensions.get('window').width / 1  -6,
}

});


   export {Tabs};
