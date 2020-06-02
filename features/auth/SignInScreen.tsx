import React, { Component } from 'react';
import { Image, View, TextInput, StyleSheet, Button } from 'react-native';

export default class SignInScreen extends Component {
  state = {
    email: '',
    password: ''
  }

  handleEmailChange = (text: string) => {
    this.setState({ email: text })
  }

  handlePasswordChange = (text: string) => {
    this.setState({ password: text })
  }

  login = (email: string, pass: string) => {
    alert('email: ' + email + ' password: ' + pass)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/logo_light.png")} />
        <View>
          <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={this.handleEmailChange} />
          <TextInput style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={this.handlePasswordChange} secureTextEntry />
          <Button onPress={() => this.login(this.state.email, this.state.password)} title="Submit" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems:'center'
  },
  image: {
    resizeMode: "contain",
    width: 200,
  },
  input: {
    margin: 15
  }
})