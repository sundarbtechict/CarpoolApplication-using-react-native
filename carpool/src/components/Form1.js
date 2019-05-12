import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class Form1 extends Component<{}> {

  constructor()
  {
    super();
    this.state ={
      email:"",
      phone:"",
    }
    this.login=this.login.bind(this);
  }

  updateValue = (field , value) =>
  {
   this.setState({[field] : value}) 
  }

  login() 
  {
    axios.post('http://172.22.9.59:8080/riders/get/', {
    email:this.state.email,
    phone:this.state.phone,
     },
     {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
  .then(function (response) {
    if(response.data.id!=undefined)
    Actions.home({
      id:response.data.id,
      firstName:response.data.firstName
    });
    else
    Alert.alert("error: your MailId or password is wrong");
    }).catch(function (error) {
      Alert.alert("error: "+error);
    });
  }
   
    

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(value) => this.updateValue("email",value)}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              onChangeText={(value) => this.updateValue("phone",value)}
              />  
           <TouchableOpacity style={styles.button} onPress={this.login}>
             <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'#48a999',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#e0e0e0',
    marginVertical: 10
  },
  button: {
    width:300,
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