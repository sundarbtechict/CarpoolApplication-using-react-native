import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  SectionList,
  TouchableOpacity
} from 'react-native';


import {Actions} from 'react-native-router-flux';

export default class GetRiders extends Component<{}> {

  constructor(){
    super();
    this.state= {
      isGet: false
    };
  }

  detail(item){
    Actions.riderDetails({
      detail:item
    })
  }

  get = () =>{
    this.setState({isGet : true}) ; 
  }
  
	render() {
    let list;
    let dataList=[ { "id":2,"name":"sundar", "mobile":"82201909696", "trip_source":"address", "depature":"10:00 AM"},
    { "id":3,"name":"thivagar", "mobile":"7878654321", "trip_source":"District Collector's Office, Trichy Tanjore Road, Thanjavur district, Vallam - 613401, Tamil Nadu, India", "depature":"10:20 AM"},
    { "id":4,"name":"barath", "mobile":"9876543210", "trip_source":"Vallam Bus Stand, Periyar Nagar, Vallam, Tamil Nadu", "depature":"10:30 AM"},
    { "id":5,"name":"vignesh", "mobile":"9898767654", "trip_source":"address3", "depature":"10:40 AM"}];
    if(this.state.isGet==true)
    {
      list=<SectionList
      sections={[
        {title: 'Riders Requests', data: dataList},
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
        <TouchableOpacity onPress={this.get} style={styles.button}><Text style={styles.buttonText}>Requests</Text></TouchableOpacity>
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