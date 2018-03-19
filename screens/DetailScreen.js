import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './HomeScreen';
import Communications from 'react-native-communications';

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
        <Text style={styles.introduceText}>
          Start By Selecting Your Device That Needs Repairing 
        </Text>

      <View style={styles.introduce2}>
        <Text style={styles.introduceText2}>
          iPhone
        </Text>
        <Text style={styles.introduceText2}>
          iPhone 6S
        </Text>
        <Text style={styles.introduceText2}>
          Color : white
        </Text>
        <Text style={styles.introduceText2}>
          Broken LCD Screen
        </Text>
      </View>

        <Button
				  title= {'Submit'} 
				  onPress={() => {Communications.text('2134216770','StarWireless!!'); }}
				  icon={{name: 'av-timer'}}
				  buttonStyle={{height: 50, width: 250, backgroundColor: 'rgba(199, 43, 98, 1)', borderWidth: 2, borderColor: 'white', borderRadius: 30}}
				  textStyle={{fontWeight: 'bold'}}
				/>	


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

  introduceText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },

  introduce2: {
    marginTop: SCREEN_HEIGHT*0.11,
    marginLeft: SCREEN_WIDTH*0.1,
    marginRight:SCREEN_WIDTH*0.1,
    marginBottom: SCREEN_HEIGHT*0.11,
  },

  introduceText2: {
    fontSize: 17,
    textAlign: 'center',
  },

});


export default DetailScreen;

