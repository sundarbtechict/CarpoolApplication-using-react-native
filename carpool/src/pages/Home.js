import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';

import {Actions} from 'react-native-router-flux';

export default class Home extends Component<{}> {

  constructor()
  {
    super();
    
    this.add=this.requestRide.bind(this);
    this.add=this.offerRide.bind(this);
  }
  
  requestRide(id,firstName) {
		Actions.requestRide({
      id:id,
      firstName:firstName
    })
  }
  offerRide(id,firstName) {
		Actions.offerRide({
      id:id,
      firstName:firstName
    })
	}

	render() {
		return(
			<View style={styles.container}>
        {/* <Text style={styles.text}>{this.props.id}</Text>
        <Text style={styles.text}>{this.props.firstName}</Text> */}
        <TouchableOpacity onPress={() => this.requestRide(this.props.id,this.props.firstName)} style={styles.button}><Text style={styles.buttonText}> Request a ride</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.offerRide(this.props.id,this.props.firstName)} style={styles.button}><Text style={styles.buttonText}> Offer a ride</Text></TouchableOpacity>
			</View>	
			)
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#424242',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  text : {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  button: {
    width:200,
    backgroundColor:'#1b1b1b',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});