import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
import Init from './components/Init/Init';
import Serie from './components/Serie/Serie';

const App = createStackNavigator({
  Home: { screen: Init },
  Serie: { screen: Serie },
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