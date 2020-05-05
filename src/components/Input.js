/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TextInput} from 'react-native';

export default class Input extends Component {
    state ={
        text:'',
    };
	render() {
		return (
		<View>
            <TextInput 
            {...this.props}
            style = {styles.input}
            placeholderTextColor="#ddd"
            value={this.state.text}
            ref={this.props.inputRef}
            onChangeText={text =>this.setState({text})}

             />
        </View>
		);
	}
}

const styles = StyleSheet.create({
	input:{
        height: 40,
        paddingHorizontal:5,
        borderWidth: 2,
        borderRadius:3,
        borderColor:'#f1f1f1',
        color:'#999',
        marginBottom: 10,
        fontSize:14,
        fontWeight: '600',

    },
});
