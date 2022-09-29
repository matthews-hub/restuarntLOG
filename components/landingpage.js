
import React from 'react'
import { Image, Pressable, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import * as Progress from 'react-native-progress';

export default function LandingPage() {
  return (
    <SafeAreaView>
          <View>
             <View>
              <Image
                  source={require('../assets/logo.jpg')}
                  style={{ width: 300, height: 300, alignSelf:'center',marginBottom:60,marginTop:90}}
                />
              </View>
 
          </View>  
          <View>
          <Progress.CircleSnail color={['red', 'green', 'blue']} size={100} style={{alignSelf:'center'}}/>
          </View> 
          
    </SafeAreaView>
     
  )
}

const styles = StyleSheet.create({
  input: {
    fontWeight:400,
    fontSize:16,
    backgroundColor: '#fff',
    color: '#424242',
  },
  searchIcon: {
    padding: 10,
},
  submainview: {
    flex: 1,
    flexDirection: 'row',
   
    alignItems: 'center',
    backgroundColor: '#fff',

    borderColor: 'black',
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderTopWidth:2,
    borderBottomWidth:2,

    borderRadius:25,
    margin:5,
    height:45,
    width:300,
  },
  signuptext:{
    color:'white',
    alignSelf:'center',
    padding:5,
    fontSize:20,
    fontWeight:600
  }
});
