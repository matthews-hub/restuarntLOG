import React from 'react'
import { Image, Pressable, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Button, Text } from 'react-native-web'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';

export default function SignIn() {
  return (
    <SafeAreaView>
          <View>
         
            {/* <Appbar.Header style={{backgroundColor:'white', top:0}}>
              <TouchableOpacity>
                <AntDesign name="left" size={25} color="black" />
              </TouchableOpacity>
            </Appbar.Header> */}

             <View>
              <Image
                  source={require('../assets/logo.jpg')}
                  style={{ width: 135, height: 136, alignSelf:'center',marginBottom:60, top:40}}
                />
              </View>

                  <View>
                      <View style={styles.submainview}>
                        <Ionicons style={styles.searchIcon} name="person" size={24} color="black" />
                        <TextInput style={styles.input} 
                        placeholder='Firstname'>
                        </TextInput>
                      </View>

                      <View style={styles.submainview}>
                        <Ionicons style={styles.searchIcon} name="person" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Lastname'></TextInput>
                      </View>

                      <View style={styles.submainview}>
                        <FontAwesome style={styles.searchIcon} name="envelope" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Email'></TextInput>
                      </View>

                      <View style={styles.submainview}>
                        <AntDesign style={styles.searchIcon} name="mobile1" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Mobile Number'></TextInput>
                      </View>

                      <View style={styles.submainview}>
                        <FontAwesome style={styles.searchIcon} name="lock" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Create Password'></TextInput>
                      </View>

                      <View style={styles.submainview}>
                        <FontAwesome style={styles.searchIcon} name="lock" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Confirm Password'></TextInput>

                      </View>
                
                  </View>
             
                  <View style={{backgroundColor:'black',height:45,width:308,borderRadius:25,marginTop:25,marginBottom:20,alignSelf:'center'}} >
                    <Pressable style={{alignSelf:'center'}}>
                      <Text style={styles.signuptext}>Sign Up</Text>
                    </Pressable>
                  </View>

                <Pressable style={{fontWeight:400,marginBottom:10}}>
                  <Text style={{alignSelf:'center'}}>Already have and account?</Text>
                </Pressable>
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
    // justifyContent: 'center',
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
