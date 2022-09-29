
import React from 'react'
import { Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-web'
import { FontAwesome } from '@expo/vector-icons';
 
export default function LogIn() {

    
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
          <View>
             <View>
              <Image
                  source={require('../assets/logo.jpg')}
                  style={{ width: 200, height: 200, alignSelf:'center',marginBottom:60,marginTop:50}}
                />
              </View>

                  <View>
                       

                      <View style={styles.submainview}>
                        <FontAwesome style={styles.searchIcon} name="envelope" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Email'></TextInput>
                      </View>

                      <View style={styles.submainview}>
                        <FontAwesome style={styles.searchIcon} name="lock" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Password'></TextInput>

                      </View>
                
                  </View>
             
                  <TouchableOpacity style={{backgroundColor:'black',height:45,width:308,borderRadius:25,marginTop:25,marginBottom:20,alignSelf:'center'}}>
                       <Text style={styles.signuptext}>Sign Up</Text>
                  </TouchableOpacity>

            
                <TouchableOpacity style={{fontWeight:400,marginBottom:10}}>
                  <Text style={{alignSelf:'center'}}>Forgot password?</Text>
                </TouchableOpacity>
                
               
                <TouchableOpacity style={{fontWeight:400,marginBottom:10}}>
                <Text style={{alignSelf:'center'}}>Don't have an account?</Text>
              </TouchableOpacity>
          </View>  
          </KeyboardAvoidingView> 
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
