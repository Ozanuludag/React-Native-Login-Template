/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
export default class MyButton extends Component {

	render() {
        const {color} = this.props;
		return (
			<TouchableOpacity style={[styles.btn, {backgroundColor:this.props.bgColor}]} >
                <Text style={[styles.text, {color}]}>{this.props.text}</Text>
            </TouchableOpacity>
		);
	}
}

MyButton.PropTypes = {
    text : PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	btn: {
        paddingVertical:15,
        paddingHorizontal:10,
        borderRadius:3,
        alignItems:'center',
  },
  text: {
    fontSize:14,
  },
});
