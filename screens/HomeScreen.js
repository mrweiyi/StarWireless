import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import DetailScreen from './DetailScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const IMAGE_SIZE = SCREEN_WIDTH - 80;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to StarWireless',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
      <Image
        // @ts-ignore
        source={require('../resources/logo.jpg')}
      />

      <Button
        title= {'Repair My Device'} 
        onPress={() => { navigate('Detail'); }}
        icon={{name: 'av-timer'}}
        buttonStyle={{height: 50, width: 250, backgroundColor: 'rgba(199, 43, 98, 1)', borderWidth: 2, borderColor: 'white', borderRadius: 30}}
        textStyle={{fontWeight: 'bold'}}
      />	


      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>

    </View>


    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});


export default HomeScreen;
