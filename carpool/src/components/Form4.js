import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity ,
  ScrollView,
  Alert,
  TouchableHighlight
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import apiKey from '../../google-api-key';

export default class Form4 extends Component<{}> {
  constructor()
  {
    super();
    this.state ={
        from:"",
        to:"",
        seats:"",
        destination:"",
        predictions:[],
        type:""
    }
    this.add=this.add.bind(this);
  }

  updateLocation(field , value) {
    this.setState({
      predictions :[],
      [field] : value,
    }) ;
  }

  async updateValue(field , value) 
  {
   this.setState({[field] : value}) ;
   const apiUrl='https://maps.googleapis.com/maps/api/place/autocomplete/json?'
    +'input='+value+'&key='+apiKey+'&location=10.7278405,79.01887&radius=2000';
    try{
    const result = await fetch (apiUrl);
    const json = await result.json();
    console.log(json); 
    this.setState({
      predictions:json.predictions,
      type:field
    })
    }
    catch(error){
      console.error(error);
    }
  }

  async getLatAndLong(address,field){
    const apiUrl='https://maps.googleapis.com/maps/api/geocode/json?'
    +'key='+apiKey+'&address='+address;
    
    await axios.get(apiUrl)
        .then( (response) =>  {
          const json =  response.data;
          var location = json.results[0].geometry.location;
          let coords=location.lat+','+location.lng;
          this.setState({[field]:coords})
        }).catch( (error) => {
          Alert.alert("error: "+error);
      }); 
  }
  async add() {
    //    console.warn(this.props.id);
    await this.getLatAndLong(this.state.orgin,"from");
    await this.getLatAndLong(this.state.destination,"to");
    //    console.warn(this.state.from);
    //    console.warn(this.state.to);
        axios.post('http://172.22.9.59:8080/driverSchedule/', {
         from:this.state.from,
         to:this.state.to,
         seats:this.state.seats,
         id:this.props.id
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

    let predictions1,predictions2;
    if(this.state.type=='orgin')
    {
    predictions1=this.state.predictions.map(prediction => 
      <TouchableHighlight  key={prediction.id} onPress={ () => this.updateLocation('orgin',prediction.description)}>
       <View><Text style={styles.suggestions}>
        {prediction.description}</Text></View>
      </TouchableHighlight>)
    }
    if(this.state.type=='destination')
    {
    predictions2=this.state.predictions.map(prediction => 
      <TouchableHighlight  key={prediction.id} onPress={() => this.updateLocation('destination',prediction.description)}>
       <View><Text style={styles.suggestions}>
        {prediction.description}</Text></View>
      </TouchableHighlight>)
    }

		return(
            <ScrollView>
			<View style={styles.container}>
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="from"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              value={this.state.orgin}
              onChangeText={(value) => this.updateValue("orgin",value)}
              />
              {predictions1 }
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="to"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              value={this.state.destination}
              onChangeText={(value) => this.updateValue("destination",value)}
              />
              {predictions2 }
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="seats"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="numeric"
              onChangeText={(value) => this.updateValue("seats",value)}
              />        
            <TouchableOpacity onPress = {this.add} style={styles.button}>
                <Text style={styles.buttonText}>Post</Text>
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
    borderBottomColor:'rgba(255, 255,255,0.2)',
    borderBottomWidth: 1,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
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
  },
  suggestions:{
    backgroundColor:'#424242',
    color:'#ffffff',
     padding:5,
     fontSize:18,
     borderWidth:0.5,
     marginLeft:5,
     marginRight:5,
     borderRadius:15, 
   }
  
});