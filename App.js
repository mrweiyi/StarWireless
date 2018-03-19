import {
  StackNavigator,
} from 'react-navigation';

import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import SuccessScreen from './screens/SuccessScreen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
  Success:{ screen: SuccessScreen},
});

export default App;