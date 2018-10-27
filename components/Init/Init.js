import React from 'react';
import { Text, Image, View } from 'react-native';

import styles from './Styles.js';
import Series from '../Series/Series.js';

export default class Init extends React.Component {

  constructor (props) {
    super(props);
  }

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image style={styles.logo} source={require("../../assets/logo.png")} />
            </View>

            <Series navigation={this.props.navigation} />

          </View>
        );
      }
}