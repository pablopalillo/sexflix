import React from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import Styles from './Styles.js';

export default class Series extends React.Component {
    render() {
        return(
            <ScrollView style={Styles.series}>
                <View style={Styles.serie}>
                    <Text style={Styles.text}>Narcos</Text>
                    <Image style={Styles.serieImage} source={{uri: "https://facebook.github.io/react-native/img/favicon.png"}} />
                </View>
                <View style={Styles.serie}>
                    <Text style={Styles.text}>Narcos</Text>
                    <Image style={Styles.serieImage} source={{uri: "https://facebook.github.io/react-native/img/favicon.png"}} />
                </View>
                <View style={Styles.serie}>
                    <Text style={Styles.text}>Narcos</Text>
                    <Image style={Styles.serieImage} source={{uri: "https://facebook.github.io/react-native/img/favicon.png"}} />
                </View>
                <View style={Styles.serie}>
                    <Text style={Styles.text}>Narcos</Text>
                    <Image style={Styles.serieImage} source={{uri: "https://facebook.github.io/react-native/img/favicon.png"}} />
                </View>
            </ScrollView>
        );
    }
}