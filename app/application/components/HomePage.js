import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HomePage extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<View>
				<Text> 'Olá está é a Home Page' </Text>
			</View>
		);
	}
}