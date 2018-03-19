import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, BackHandler } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNExitApp from 'react-native-exit-app';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const IMAGE_SIZE = SCREEN_WIDTH - 80;


class SuccessScreen extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Image
          // @ts-ignore
          source={require('../resources/logo.jpg')}
        />

        <Button
				  title= {'I Got it ! Exit this App now.'} 
          onPress={() => BackHandler.exitApp() }
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default SuccessScreen;
