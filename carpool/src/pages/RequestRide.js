import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Form3 from '../components/Form3';

import {Actions} from 'react-native-router-flux';

export default class OfferRide extends Component<{}> {
back()
{
  Actions.pop();
}	

render() {
		return(
			<View style={styles.container}>
        <Text style={styles.text}>{this.props.firstName}</Text>
        <Form3 id={this.props.id}/>
        <TouchableOpacity onPress={this.back} style={styles.button}><Text style={styles.buttonText}>Back</Text></TouchableOpacity>
			</View>	
			)
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#eeeeee',
    flex: 1,
    alignItems:'center'
  },
  text : {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  button: {
    width:200,
    backgroundColor:'#004c40',
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