import React from 'react';
import { View, Image, Text } from 'react-native';

import global from '../Share/Global.js';
import Styles from './Styles.js';
import localData from '../../storage/database.json';

import { createStackNavigator } from 'react-navigation';

export default class Chapter extends React.Component {

    constructor (props) {
      super(props);
      this.state = { 
        id: null,
        title: null,
        description: null
       };
    }

    getChapter(itemId) {
      let response = null;

      if (itemId) {
        try {
          
          if (localData.length > 0) {
            response = localData.filter((item) => item.key == itemId );

            if(response) {
              response = response[0];
            }
          }
        } catch (error) {
            console.error(error);
        }
      }

      return response;
    }

    componentDidMount() {

        const { navigation } = this.props;
        const itemId = navigation.getParam('chapterId', 'NO-ID');
        let chapter  = this.getChapter(itemId);

        this.setState({
          id: chapter.key,
          title: chapter.title,
          description: chapter.description
        });
    }

    render() {

        return (
          <View style={global.container}>
            <View style={global.topBar}>
              <Image style={global.logo} source={require("../../assets/logo.png")} />
            </View>

            <View>
              <Image style={Styles.serieImage} source={require("../../assets/images/narcos.jpg")} />
              <Text style={Styles.title}> { this.state.title }</Text>
            </View>
          
            <View>
                <Text style={Styles.description}>
                    { this.state.description }
                </Text>
            </View>

          </View>
        );
      }
}