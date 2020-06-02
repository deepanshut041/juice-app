import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require("../assets/splash.png")} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffffff"
    },
    image: {
        width:400,
        height: 400
    }
})