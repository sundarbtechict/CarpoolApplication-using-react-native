import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity ,
  ScrollView,
  Alert
} from 'react-native';

import {Actions} from 'react-native-router-flux';


export default class Form2 extends Component<{}> {
  constructor()
  {
    super();
    this.state ={
      firstName:"",
      lastName:"",
      email:"",
      address:"",
      phone:"",
      gender:""
    }
    this.add=this.add.bind(this);
  }

  updateValue = (field , value) =>
  {
   this.setState({[field] : value}) 
  }

   add() {
        axios.post('http://172.22.9.59:8080/riders/', {
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        email:this.state.email,
        address:this.state.address,
        phone:this.state.phone,
        gender:this.state.gender
         },
         {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        })
      .then(function (response) {
        Actions.login();
      }).catch(function (error) {
        Alert.alert("error: "+error);
    });      
 }

	render(){
		return(
            <ScrollView>
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="First Name"
              placeholderTextColor = "#439889"
              selectionColor="#00796b"
              keyboardType="default"
              onChangeText={(value) => this.updateValue("firstName",value)}
              />
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Last Name"
              placeholderTextColor = "#439889"
              selectionColor="#00796b"
              keyboardType="default"
              onChangeText={(value) => this.updateValue("lastName",value)}
              />
             <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#439889"
              selectionColor="#00796b"
              keyboardType="email-address"
              onChangeText={(value) => this.updateValue("email",value)}
              />
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Mobile"
              placeholderTextColor = "#439889"
              selectionColor="#00796b"
              keyboardType="phone-pad"
              onChangeText={(value) => this.updateValue("phone",value)}
              />
             <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Address"
              placeholderTextColor = "#439889"
              selectionColor="#00796b"
              keyboardType="default"
              onChangeText={(value) => this.updateValue("address",value)}
              />
             <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Gender"
              placeholderTextColor = "#439889"
              selectionColor="#00796b"
              keyboardType="default"
              onChangeText={(value) => this.updateValue("gender",value)}
              />
          
           <TouchableOpacity onPress = {this.add} style={styles.button}>
             <Text style={styles.buttonText}>Signup</Text>
           </TouchableOpacity>     
  		</View>
          </ScrollView>
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
    borderBottomColor:'#00796b',
    borderBottomWidth: 1,
    paddingHorizontal:16,
    fontSize:16,
    color:'#00796b',
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