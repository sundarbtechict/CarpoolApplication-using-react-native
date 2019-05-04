import React, {Component} from 'react';
import { StyleSheet, StatusBar, View} from 'react-native';
import Routes from './src/Routes';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
         backgroundColor="#1b1b1b"
         barStyle="light-content"
       />
       <Routes/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});
