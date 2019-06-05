import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, 
TouchableOpacity,Dimensions } from 'react-native';


const Info = () =>{
return (
<View style={styles.imageContainer}>
  <Image
          source={require('../assets/jody.jpg')}
          style= {styles.jodyImage}
     />
     <Text style={styles.title}>
     Jody Wisternoff
     </Text>
     <View>
     <Text style={styles.desc}>
     Experimental electronic music pioneer,
     {"\n"}
     Half of duo Way Out West.Boss at Anjunadeep.
     </Text>
    </View>
    {/* Buttons */}
    <View style={styles.btnContainer}>
    <View>
  <TouchableOpacity
         style={[styles.followBtn, styles.btn]}>
         <Text style={styles.btnText}> Following </Text>
       </TouchableOpacity>
       </View>
       <View>
       <TouchableOpacity
         style={[styles.btn,styles.msgBtn]}>
         <Text style={styles.btnMsg}> Message </Text>
       </TouchableOpacity>
      </View>
      </View>
      {/* End of Buttons */}
      {/* Records */}
      <View style={styles.recordsContainer}>
      {/* First Record */}
      <View style={[styles.record,styles.firstRecord]}>
       <Text style={styles.recordText}>236</Text>
       <Text style={styles.desc}>Records</Text>
      </View>
      {/* Second Record */}
      <View style={[styles.record,styles.firstRecord]}>
        <Text style={styles.recordText}>23,6K</Text>
       <Text style={styles.desc}>Ratings</Text>
      </View>
      {/* Third Record */}
      <View style={[styles.record,styles.finalrecord]}>
       <Text style={styles.recordText}>2,8k</Text>
       <Text style={styles.desc}>Followers</Text>
      </View>
      </View>
      {/* End of Records */}
</View>
);
}

const styles = StyleSheet.create({ 
imageContainer:{
    flex:1,
    alignItems: 'center',
    },
jodyImage:{
    width:120,
    height:120,
    borderWidth:5,
    borderRadius:70,
    borderColor:'#fff',
    position:'relative',
    top:'-10%',
    marginBottom:0,
    paddingBottom:0,
},

title:{
    fontWeight:'bold',
    color:'#202020',
    textAlign:'center',
    fontSize:25,
     marginTop:-10,
    marginBottom:10,
},

desc:{
   lineHeight:25,
   textAlign:'center', 
   fontSize:18,
   color:'#C1C1C1',
},
btnContainer:{
   marginTop:15,
 flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
     justifyContent: 'space-around',
     marginBottom:15,
},
btn:{
    borderRadius:25,
    padding:10,
    paddingLeft:15,
    paddingRight:15,
    marginRight:10,
},
followBtn:{
    backgroundColor:'#723EB5',
},
btnText:{
 textTransform:'uppercase',
 color:'#F3E5F1',
},
msgBtn:{
    borderColor:'#723EB5',
    borderWidth:2,
},
btnMsg:{
    color:'#723EB5',
    textTransform:'uppercase',
    letterSpacing:1,
},
recordsContainer:{
 flex:1,
 flexDirection:'row',
 flexWrap:'wrap',
//  marginTop:-180,
},
record:{
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor:'#EEEEEE',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:15,
    paddingRight:15,
    textAlign:'center',
    width: Dimensions.get('window').width / 3  -6,
    height:80,
},
firstRecord:{
borderRightWidth:1,
},
finalrecord:{
    borderRightWidth:0,
},
recordText:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    color:'#5D5D5D',
}
});

export {Info};