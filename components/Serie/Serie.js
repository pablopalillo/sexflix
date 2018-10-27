import React from 'react';
import { Text, Image, View } from 'react-native';

import global from '../Share/Global.js';
import Styles from './Styles.js';


export default class Serie extends React.Component {
    render() {
        return (
          <View style={global.container}>
            <View style={global.topBar}>
              <Image style={global.logo} source={require("../../assets/logo.png")} />
            </View>

            <View>
                <Image style={Styles.serieImage} source={require("../../assets/images/narcos.jpg")} />
                <Text style={Styles.title}>Narcos</Text>
            </View>

          </View>
        );
      }
}