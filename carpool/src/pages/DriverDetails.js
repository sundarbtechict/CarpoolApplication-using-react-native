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

export default class DriverDetails extends Component<{}> {

    constructor()
    {
      super();
    }
    
    back()
    {
        Actions.pop();
    }

	render() {
        let list=["Name : "+this.props.detail.name,
        "Trip source address : "+this.props.detail.trip_source,
        "Depature Time : "+this.props.detail.depature,
        "Mobile : "+this.props.detail.mobile];

		return(
			<View style={styles.container}>
            <SectionList
            sections={[
                {title: 'Drivers Profile', data: list},
            ]}
            renderItem={({item}) =>  <View><Text style={styles.item}>{item}</Text></View>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
            />
            <View style={styles.align}>
                <TouchableOpacity onPress={this.get} style={styles.button}><Text style={styles.buttonText}>Confrim ride</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.back} style={styles.button}><Text style={styles.buttonText}>Back</Text></TouchableOpacity>
            </View>
        </View>
		)}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#eeeeee',
    flex: 1,
    justifyContent :'center'
  },
  align : {
    alignItems:'center'
  },
  text : {
  	color:'#00796b',
      fontSize:16,
      fontWeight:'400',
      paddingVertical: 13
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
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#004c40',
    color:'#ffffff',
    width:'100%'
  },
});