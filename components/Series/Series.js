import React from 'react';
import { Image, Button, Text, View, ScrollView,TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Styles from './Styles.js';

export default class Series extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <ScrollView style={Styles.series}>
                <View style={Styles.serie}>
                    <TouchableOpacity onPress={() => navigate('Serie')} >
                        <Text style={Styles.text}>Narcos</Text>
                        <Image style={Styles.serieImage} source={require("../../assets/images/narcos.jpg")} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.serie}>
                    <TouchableOpacity onPress={() => navigate('Serie')} >
                        <Text style={Styles.text}>Narcos</Text>
                        <Image style={Styles.serieImage} source={require("../../assets/images/narcos.jpg")} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}