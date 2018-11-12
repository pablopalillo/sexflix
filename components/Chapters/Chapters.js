import React from 'react';
import 
{ Text, 
 View,
 ScrollView,
 Image,
 TouchableOpacity,
 FlatList,
 ActivityIndicator 
} from 'react-native';

import localData from '../../storage/database.json';
import Styles from './Styles.js';
import { createStackNavigator } from 'react-navigation';

export default class Chapters extends React.Component {

    constructor(props){
        super(props);
        this.state = { isLoading: true, data: null }
    }
    
    
    getChapters() {

        let response = null;

        try {
            response = localData;
        } catch (error) {
            console.error(error);
        }

        return response;
    }

    componentDidMount() {
        this.setState({
            isLoading : false,
            data: this.getChapters(),
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <ScrollView>
            <FlatList
              data={this.state.data}
              renderItem={({item}) => 
                            <TouchableOpacity onPress={() => navigate('Chapter')}  style={Styles.chapters}>
                                <Image style={Styles.play} source={require("../../assets/play.png")} />
                                <Text style={Styles.item}>{item.title}</Text>
                            </TouchableOpacity>
                         }
            />
          </ScrollView>
        );
    }
}