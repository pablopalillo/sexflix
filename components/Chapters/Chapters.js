import React from 'react';
import { Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';

import Styles from './Styles.js';

export default class Chapters extends React.Component {
    render() {
        return(
            <ScrollView>
            <FlatList
              data={[
                {key: '1', title: 'Capitulo 1'},
                {key: '2', title: 'Capitulo 2'},
                {key: '3', title: 'Capitulo 3'},
                {key: '4', title: 'Capitulo 4'},
                {key: '5', title: 'Capitulo 5'},
                {key: '6', title: 'Capitulo 6'},
                {key: '7', title: 'Capitulo 7'},
                {key: '8', title: 'Capitulo 8'},
              ]}
              renderItem={({item}) => 
                            <TouchableOpacity style={Styles.chapters}>
                                <Image style={Styles.play} source={require("../../assets/play.png")} />
                                <Text style={Styles.item}>{item.title}</Text>
                            </TouchableOpacity>
                         }
            />
          </ScrollView>
        );
    }
}