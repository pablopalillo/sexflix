import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import Series from '../Series/Series.js';

export default class Init extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image style={styles.logo} source={require("../../assets/logo.png")} />
            </View>

            <Series />

          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141414',
    },
    topBar:{
      marginTop: 25,
      height: 50,
      alignItems: 'center',
      borderBottomColor: 'white',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    text: {
      color: "white"
    },
    logo: {
      width: 120,
      height:30
    }
  });
  