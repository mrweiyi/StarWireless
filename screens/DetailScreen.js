import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './HomeScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const IMAGE_SIZE = SCREEN_WIDTH - 80;

class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Enter Your Device Details',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.container}>
 
        <Button
				  title= {'Submit'} 
				  onPress={() => { navigate('Success'); }}
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

const WelcomeStack = StackNavigator({
  Welcome: {
    screen: HomeScreen,
  },
  Details: {
    screen:DetailScreen,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default DetailScreen;

