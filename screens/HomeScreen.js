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
      <View style={styles.introduce}>
        <Text style={styles.introduceText}>
          Cheapest iPhone, iPad, Samsung, Macbook Computer 
        </Text>
        <Text style={styles.introduceText}>
          Reapir in Los Angeles
        </Text>
      </View>
      <View style={styles.introduce2}>
        <Text style={{fontWeight: 'bold',}}>
          Good news! We’ve saved 47360 devices across the US. We are here to save yours! 
        </Text>
      </View>
      
      <Button
        title= {'Repair My Device'} 
        onPress={() => { navigate('Detail'); }}
        icon={{name: 'build'}}
        buttonStyle={{height: 70, width: 300, backgroundColor: 'rgba(199, 43, 98, 1)', borderWidth: 2, borderColor: 'white', borderRadius: 30}}
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
  introduce: {
    flex: 0.35,
    marginTop: SCREEN_HEIGHT*0.01,
    

  },
  introduce2: {

    marginTop: SCREEN_HEIGHT*0.15,
    marginLeft: SCREEN_WIDTH*0.1,
    marginRight:SCREEN_WIDTH*0.1,
    marginBottom: SCREEN_HEIGHT*0.05,

  },
  introduceText: {
    fontWeight: 'bold',
    color:'#8b0000',
    fontSize: 25,
    textAlign: 'center',

  },
  address :{
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SCREEN_HEIGHT*0.2,
    

  }
});


export default HomeScreen;
