import React, { Component } from 'react';
import { Text, Button, View, Alert, StyleSheet } from 'react-native';
import STYLES 	from './Counter.styles';

export default class TextComponent extends Component{
	constructor(){
		super();
		// pode ser feito assim tambem
		
			this.state = {
				counter: 0
			};
		
		//this.state.counter = 0;
	}

	increment = () => {
		this.setState({
			counter: this.state.counter + 1
		});
		Alert.alert('My Title', this.state.counter.toString());
	}

	decrement = () => {
		this.setState({
			counter: this.state.counter - 1
		});
		Alert.alert('My Title', this.state.counter.toString());
	}

	render(){
		return(
			<View>
				<Text style={STYLES.txtCounter}>
					{this.state.counter}
				</Text>
				<Button 
					title="Incrementar" 
					onPress={this.increment}
					color="#F44336"></Button>
					
				<Button title="Descrementar" onPress={this.decrement}></Button>
			</View>
		)
	}
}


