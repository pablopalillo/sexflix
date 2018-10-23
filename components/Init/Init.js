import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class Init extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.topBar}>
              <Text style={styles.text}>Sexflix</Text>
            </View>

            <ScrollView>
              <Text style={styles.text}>Open up App.js to start working on your ass!</Text>
            </ScrollView>
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
  