import React, { useState } from 'react'
import { Button, Image, 
         KeyboardAvoidingView, 
         Pressable, SafeAreaView, 
         StyleSheet, Text, TextInput, 
         TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import { getAuth,  } from "../components/firebase.js";
// import {  } from 'firebase/auth'; 
import { addDoc, collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { db,Auth } from '../components/firebase.js';
export default function SignIn() {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")


  const handleSignUp =()=>{
    // e.preventDefault(); 
    // const Auth = getAuth();
    createUserWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        addDoc(collection(db, "users"), {

        _firstname:user.firstname,
        // _lastname:lastname,
        // _email:email,
        // _mobile:mobile,
        // _password:password,
        // _confirmpassword:confirmpassword
      });
          alert('Succesfully registered as Admin')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        console.log(email); 
      });

  };


  return (
    <SafeAreaView>
         <KeyboardAvoidingView>
          <View>
         
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
                        placeholder='Firstname' onChangeText={(e)=>setFirstname()}>
                        </TextInput>
                      </View>

                      <View style={styles.submainview}>
                        <Ionicons style={styles.searchIcon} name="person" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Lastname' onChangeText={(e)=>setLastname()}></TextInput>
                      </View>

                      <View style={styles.submainview}>
                        <FontAwesome style={styles.searchIcon} name="envelope" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Email' onChangeText={(e)=>setEmail()}></TextInput>
                      </View>

                      <View style={styles.submainview}>
                        <AntDesign style={styles.searchIcon} name="mobile1" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Mobile Number' onChangeText={(e)=>setMobile()}></TextInput>
                      </View>

                      <View style={styles.submainview}>
                        <FontAwesome style={styles.searchIcon} name="lock" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Create Password' onChangeText={(e)=>setPassword()}></TextInput>
                      </View>

                      <View style={styles.submainview}>
                        <FontAwesome style={styles.searchIcon} name="lock" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Confirm Password' onChangeText={(e)=>setConfirmPassword()}></TextInput>

                      </View>
                
                  </View>
             
                    <TouchableOpacity onPress={()=>handleSignUp()} style={{backgroundColor:'black',height:45,width:308,borderRadius:25,marginTop:25,marginBottom:20,alignSelf:'center'}}>
                       <Text style={styles.signuptext}>Sign Up</Text>
                    </TouchableOpacity>

          </View>  
                 <TouchableOpacity
                 style={{fontWeight:400,marginBottom:10,alignSelf:'center'}}>
                     Already have and account?
                </TouchableOpacity>
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
