import React from 'react';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';

/** SCREENS */

import Init from './components/Init/Init';
import Serie from './components/Serie/Serie';
import Chapter from './components/Chapter/Chapter';
import About from './components/About/About';

const App = createStackNavigator({
  Home: { screen: Init },
  Serie: { screen: Serie },
  Chapter: { screen: Chapter}
},
{
  headerMode:'none',
}
);

const TabNavigator = createBottomTabNavigator({
  Home: { 
    screen: App ,
    navigationOptions : {
      tabBarLabel : 'Inicio',
      tabBarIcon: ({tintColor}) => <Ionicons name="md-home" size={20} color={tintColor} />
    }
  },
  Random: { 
    screen: App,
    navigationOptions : {
      tabBarLabel : 'Inicio',
      tabBarIcon: ({tintColor}) => <Ionicons name="md-shuffle" size={20} color={tintColor} />
    }
   },
  About: { 
    screen: About,
    navigationOptions : {
      tabBarLabel : 'Inicio',
      tabBarIcon: ({tintColor}) => <Ionicons name="md-information" size={32} color={tintColor} />
    }
  }
},
{
  tabBarOptions : {
    activeBackgroundColor :  '#040404',
    inactiveBackgroundColor :  '#040404',
    activeTintColor : "white",
    inactiveTintColor : "white"
  }
});

/**
export default class App extends React.Component {
  render() {
    return (
      <Init />
    );
  }
} **/

export default TabNavigator;