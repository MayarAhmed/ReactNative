import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


 const Background = () => {
    return (
        <LinearGradient colors={['#553973', '#553973', '#192f6a']} >
        <View style={styles.background}>
        <View style = {styles.content}>
        
        <Image
          source={require('../assets/Icons/left.png')}
          style = {styles.contentElem} />

    <Text style={[styles.backgroundText, styles.contentElem]}>Jodywisternoff</Text>

<Image
          source={require('../assets/Icons/setting.png')} 
          style = {styles.contentElem}/>

          </View>
      <View style={styles.trapezoidRight} />
       <View style={styles.trapezoid} />
        </View>
        <Image
          source={require('../assets/Icons/camera.png')}  
          style={styles.camera}/>
        </LinearGradient>

    );
  } 


const styles = StyleSheet.create({
    background:{
        height: '20%',
        width:'100%',
        padding:15,
        position:'relative',
        paddingTop:25,
    },
    backgroundText:{
        color:'#fff',
        textAlign: 'center',
        letterSpacing:1,
        textTransform:'uppercase',
        fontSize:20,
    },
  
    content:{
flex:1,
flexDirection:'row',
 justifyContent: 'space-around',
    },
camera:{
position:'absolute',
bottom:5,
right:15
},
    trapezoid: {
    width: 1200,
    height: 0,
    borderBottomWidth: 200,
    borderBottomColor: '#EBE7F5',
    borderLeftWidth: 150,
    borderLeftColor: 'transparent',
    borderRightWidth: 150,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    position:'relative',
    right:-150,
    top:-50,
        transform: [
      {rotate: '180deg'}
    ],
    opacity:0.1,
  },



})






  export {Background};
