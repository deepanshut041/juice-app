import React, { Component } from 'react';
import { Image, View, SafeAreaView } from 'react-native';
import { Layout, Text, Button, Input } from '@ui-kitten/components';
import { styles } from './styles';

export default class ForgotPasswordScreen extends Component {
  state = {
    email: '',
  }

  handleEmailChange = (text: string) => {
    this.setState({ email: text })
  }

  forgot = () => {
    alert('email: ' + this.state.email)
  }

  render() {
    const { email } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Layout style={styles.screen}>
          <Image style={styles.image} source={require('../../assets/logo_light.png')} />
          <Input
            value={email}
            onChangeText={this.handleEmailChange}
            placeholder="Email"
            size="large"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Button style={styles.actionButon} onPress={this.forgot} size="large">Forgot Password</Button>
        </Layout>
      </SafeAreaView>)
  }
}