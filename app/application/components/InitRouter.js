import React, { Component } from 'react';
import { Navigator } from 'react-native';
//import { Navigator } from 'react-native-deprecated-custom-components';

import HomePage from './HomePage';
import AboutPage from './AboutPage';

export default class InitRouter extends Component{
	constructor(){
		super();
	}

	render() {
		return(
			<Navigator
				initialRounter = {{name: 'Home', title: 'Home Page'}}>
				renderScene = { this.renderScene }
			</Navigator>
		);
	}

	renderScene(route, navigator){
		if(route.name = 'Home'){
			return(
				<HomePage 
					navigator = { navigator } 
					title = 'Home' />
			);
		}
		if(route.name == 'About'){
			return(
				<AboutPage navigator = { navigator } />
			);
		}
	}
}
