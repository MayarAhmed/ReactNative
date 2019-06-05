import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView,Image,ImageBackground} from 'react-native';

 const Top = (props) => {
    return (
<View style={{paddingLeft:10}}>
<ScrollView
  scrollEventThrottle = {16}>
  <Text style={styles.title}>
  Top 100
  </Text>
  <View style={{height:180}}>
  <ScrollView
   horizontal = {true}>
 {/* First Card */}
   <View style={{height:130, width:130,marginLeft:20,borderRadius:10}}>
  <View style={{flex:1}}>
    <ImageBackground source={require('../../assets/track/track1.jpg')} style={styles.imgBack}>
      <Text style={styles.imgTitle}>Deep Blue</Text>
      <Text style={styles.imgDesc}>2380 Tracks </Text>
  </ImageBackground>
  </View>
  </View>
{/* Second Card */}
  <View style={{height:130, width:130,marginLeft:20,borderRadius:10}}>
  <View style={{flex:1}}>
    <ImageBackground source={require('../../assets/track/track2.jpg')} style={styles.imgBack}>
      <Text style={styles.imgTitle}>Deep Blue</Text>
      <Text style={styles.imgDesc}>2380 Tracks </Text>
  </ImageBackground>
  </View>
  </View>
  {/* Third Card */}
  <View style={{height:130, width:130,marginLeft:20,borderRadius:10}}>
    <View style={{flex:1}}>
   <ImageBackground source={require('../../assets/track/track3.jpg')} style={styles.imgBack}>
      <Text style={styles.imgTitle}>Deep Blue</Text>
      <Text style={styles.imgDesc}>2380 Tracks </Text>
  </ImageBackground>
  </View>
  </View>
   {/* Forth Card */}
  <View style={{height:130, width:130,marginLeft:20,borderRadius:10}}>
  <View style={{flex:1}}>
    <ImageBackground source={require('../../assets/track/track4.jpg')} style={styles.imgBack}>
      <Text style={styles.imgTitle}>Deep Blue</Text>
      <Text style={styles.imgDesc}>2380 Tracks </Text>
  </ImageBackground>
  </View>
  </View>

  {/* fifth Card */}
  <View style={{height:130, width:130,marginLeft:20,borderRadius:10}}>
  <View style={{flex:1}}>
    <ImageBackground source={require('../../assets/category/cat4.jpg')} style={styles.imgBack}>
      <Text style={styles.imgTitle}>Deep Blue</Text>
      <Text style={styles.imgDesc}>2380 Tracks </Text>
  </ImageBackground>
  </View>
  </View>

  </ScrollView>
  </View>

</ScrollView>
</View>

        );
        }

 const styles = StyleSheet.create({ 
title:{
 fontWeight:'bold',
 fontSize:20,
 color:'#202020',
 marginTop:10,
 marginBottom:10

},
imgBack:{
  flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'flex-end',
    borderWidth:2,
    borderColor:'#202020',
    borderRadius:10
},
addCat:{
  color:'#fff',
  fontSize:30,
  textAlign:'center'
},
imgTitle:{
 color:'#fff',
 fontSize:18,
 textAlign:'center'
},
imgDesc:{
   lineHeight:20,
   textAlign:'center', 
   fontSize:18,
   color:'#C1C1C1',
}




 });




  export {Top};
