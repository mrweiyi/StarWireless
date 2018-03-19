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

      <Text>Cheapest iPhone, iPad, Samsung, Macbook</Text>
      <Text>Computer Reapir in Los Angeles</Text>
      

      <Button
        title= {'Repair My Device'} 
        onPress={() => { navigate('Detail'); }}
        icon={{name: 'av-timer'}}
        buttonStyle={{height: 50, width: 250, backgroundColor: 'rgba(199, 43, 98, 1)', borderWidth: 2, borderColor: 'white', borderRadius: 30}}
        textStyle={{fontWeight: 'bold'}}
      />	

      <View style={styles.address}>
        <Text>1208 Venice Blvd </Text>
        <Text>Los Angeles,CA 90006</Text>
        <Text>(323)303-3695</Text>
      </View>

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
    flexDirection: 'column',
  },
  address :{
    flex: 0.2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SCREEN_HEIGHT*0.2,
    

  }
});


export default HomeScreen;
