
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.ceria}>
      	<Text>WELCOME</Text>
        <Text>Nama : Rayhan Suryatama Raharyawhedi</Text>
        <Text>Kelas : XI RPL 4</Text>
        <Text>Absen : 26</Text>
		<Image 
		style={{height:200, width:200}}
		source={require('./ehang.jpg')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ceria: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});