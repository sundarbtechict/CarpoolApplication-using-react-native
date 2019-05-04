import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';


import {Actions} from 'react-native-router-flux';

export default class Get extends Component<{}> {

  post(){
    Actions.home();
  }
  
	render() {
		return(
			<View style={styles.container}>
        {/* <Text style={styles.text}>{this.props.id}</Text>
        <Text style={styles.text}>{this.props.firstName}</Text> */}
        <TouchableOpacity onPress={this.post} style={styles.button}><Text style={styles.buttonText}>Get</Text></TouchableOpacity>
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