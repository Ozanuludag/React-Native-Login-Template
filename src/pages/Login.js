/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{

  render(){
    return (

      <View style={styles.container}>
        <View style = {styles.headBackground}></View>

      <View>
        <Text style= {styles.logo}>App Name</Text>
        <Text style= {styles.logoDescription}>Description Area</Text>
      </View>
       <KeyboardAvoidingView 
       behavior={'position'}
       //In order not to overlap the keyboard login area 
       >
      <ScrollView>
        <View style = {styles.loginArea}>
          <Text style= {styles.loginAreaTitle}>LoginArea Title</Text>
          <Text style= {styles.loginAreaDescription}> loginArea Description </Text>
          <LoginForm />
        </View>
       
      </ScrollView>
      <View style={styles.signUpArea}>
	    <Text style={styles.signUpDescription}>Don't have an account?</Text>
			<TouchableOpacity>
				<Text style={styles.signUpText}>Sign Up</Text>
			</TouchableOpacity>
	  </View>
      </KeyboardAvoidingView>
      </View>

    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex:1,
    paddingVertical:50,
  },
  headBackground: {
    position:'absolute',
    width:'100%',
    height:250,
    backgroundColor:'#1BB3F5',
  },
  logo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color:'white',
  },
  logoDescription: {
    textAlign: 'center',
    color:'white',
  },
  loginArea: {
    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor: '#fff',
    borderRadius:5,
    padding: 20,
  },

  loginAreaTitle: {
    textAlign: 'center',
    fontSize:20,
  },

  loginAreaDescription: {
    textAlign:'center',
    marginVertical:5,
    fontSize:12,
    color:'#A2A5A6',
  },

  signUpArea: {
    alignItems: 'center',
  }, 
  signUpDescription: {
    color: '#999',
  },
  signUpText: {
    color: '#666',
  },

});
