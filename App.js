import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
/** SCREENS */

import Init from './components/Init/Init';
import Serie from './components/Serie/Serie';
import Chapter from './components/Chapter/Chapter';

const App = createStackNavigator({
  Home: { screen: Init },
  Serie: { screen: Serie },
  Chapter: { screen: Chapter}
},
{
  headerMode:'none',
}
);

/**
export default class App extends React.Component {
  render() {
    return (
      <Init />
    );
  }
} **/

export default App;