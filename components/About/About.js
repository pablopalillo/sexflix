import React from 'react';
import { View, Image, Text } from 'react-native';

import global from '../Share/Global.js';

export default class About extends React.Component {
    render() {
        return (
            <View style={global.container}>
                <View style={global.topBar}>
                    <Image style={global.logo} source={require("../../assets/logo.png")} />
                </View>
                <View>
                    <Text style={global.textContent}>
                    Anímate con tu pareja a unirte a nuestro reto SEXFLIX.
                    </Text>
                    <Text style={global.textContent}>
                    La idea del reto SEXFLIX es que salgas de la monotonía con tu pareja  y superes los calientes retos que te traemos en cada serie.
                    Todos estos pueden traer diferentes temáticas y posiciones que de seguro te harán pasar una rutina distinta con tu pareja,  o si bien quieres sorprender puedes utilizar nuestra opción aleatoria.
                    Te invitamos a sumarte a esta comunidad y a ser el próximo rey/reina SEXFLIX.
                    </Text>
                    <Text style={global.textContent}>
                        Si te gusta la APP no olvides dejarnos la máxima calificación en PLAYSTORE
                    </Text>
                </View> 
            </View>   


        );
    }
}