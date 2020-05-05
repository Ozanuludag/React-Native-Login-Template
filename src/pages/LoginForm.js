/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';
export default class LoginForm extends Component {
    state ={
        text:'',
    };
	render() {
		return (
		<View>
            <Text style={styles.signinText}>Sign In</Text>
            <Input 
                returnKeyType={'next'} //Easy transition from keyboard to password area
                autoCapitalize = "none" // Turns the capitalization of the first letter of the entry off.
                placeholder="Username"   
                onSubmitEditing ={() =>this.passwordInput.focus()}    
            />
             <Input 
                secureTextEntry = {true}//For the password field   
                inputRef = { input => this.passwordInput =  input }    
                placeholder="Password"
                returnKeyType={'go'}
            />

            <MyButton
            bgColor={"#0065e0"}
            color={"white"}
            text={"Sign In Now!"}

            />

        </View>
		);
	}
}

const styles = StyleSheet.create({
	signinText: {
    marginVertical:10,
    fontSize:15,
    color: '#333',
    },
});
