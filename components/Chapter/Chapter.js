import React from 'react';
import { View, Image, Text } from 'react-native';

import global from '../Share/Global.js';
import { createStackNavigator } from 'react-navigation';

export default class Chapter extends React.Component {

    constructor (props) {
      super(props);
    }

    render() {          
        return (
          <View style={global.container}>
            <View style={global.topBar}>
              <Image style={global.logo} source={require("../../assets/logo.png")} />
            </View>

            <View>
                
                <Text style={global.text}>
                Look, just because I don't be givin' no man a foot massage don't make it
                right for Marsellus to throw Antwone into a glass motherfuckin' house,
                fuckin' up the way the nigger talks. Motherfucker do that shit to me, 
                he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
                </Text>
            </View>
          </View>
        );
      }
}