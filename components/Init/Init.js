import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Series from '../Series/Series.js';

export default class Init extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.topBar}>
              <Text style={styles.text}>Sexflix</Text>
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
      height: 50,
      alignItems: 'center',
      borderBottomColor: 'white',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    text: {
      color: "white"
    }
  });
  