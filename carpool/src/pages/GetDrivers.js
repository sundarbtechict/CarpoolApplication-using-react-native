import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  SectionList,
  Alert,
  TouchableOpacity
} from 'react-native';


import {Actions} from 'react-native-router-flux';

export default class GetDrivers extends Component<{}> {

  constructor(){
    super();
    this.state= {
      isGet: false,
      list:[]
    };
    this.get=this.get.bind(this);
  }

  detail(item){
    Actions.driverDetails({
      detail:item
    })
  }

  get(){
    let id=2;
    axios.get('http://172.22.9.59:8080/getRiderSchedule/'+id)
    .then((response) => {
      this.setState(state =>({
        list : response.data,
        isGet : true
      })
      );
      //console.warn(list);
    }).catch(function (error) {
      Alert.alert("Error: "+error);
  });      
  }
  
	render() {
    let list;
    let dataList=[ { "id":2,"name":"sundar", "mobile":"82201909696", "trip_source":"address", "depature":"10:00 AM"},
    { "id":3,"name":"thivagar", "mobile":"1234567891", "trip_source":"address1", "depature":"10:20 AM"},
    { "id":4,"name":"barath", "mobile":"9876543210", "trip_source":"address2", "depature":"10:30 AM"},
    { "id":5,"name":"vignesh", "mobile":"9898767654", "trip_source":"address3", "depature":"10:40 AM"}];
    if(this.state.isGet==true)
    {
      list=<SectionList
      sections={[
        {title: 'Drivers Avaialble', data:this.state.list},
      ]}
      renderItem={({item}) => <TouchableHighlight  key={item.id} onPress={ () => this.detail(item)}>
       <View><Text style={styles.item}>{item.name}</Text></View></TouchableHighlight>}
      renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      keyExtractor={(item, index) => index}
      />
    }

		return(
			<View style={styles.container}>
        {/* <Text style={styles.text}>{this.props.id}</Text>
        <Text style={styles.text}>{this.props.firstName}</Text> */}
        <View style={styles.align}>
        <TouchableOpacity onPress={this.get} style={styles.button}><Text style={styles.buttonText}>Get Drivers</Text></TouchableOpacity>
        </View>
        {list}
			</View>	
			)
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#eeeeee',
    flex: 1,
    justifyContent :'center'
  },
  align:{
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
  },  
  item: {
    padding: 10,
    fontSize: 16,
    fontWeight:'400',
    height: 44,
    color:'#00796b'
  },
  sectionHeader: {
    paddingTop: 3,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 3,
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: '#004c40',
    color:'#ffffff',
    width:'100%'
  },
});