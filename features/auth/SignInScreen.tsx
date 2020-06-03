import React, { Component } from 'react';
import { Image, View, SafeAreaView } from 'react-native';
import { Layout, Text, Button, Input, Icon } from '@ui-kitten/components';
import { styles } from './styles';
import { connect } from 'react-redux';
import * as authActions from '../../data/auth/actions';
import { SignInRequest } from '../../data/auth/types';

class SignInScreen extends Component<any> {

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

  submitSignIn = () => {
    this.props.signIn({ email: this.state.email, password: this.state.password });
  }

  goToForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword')
  }

  goToSignUp = () => {
    this.props.navigation.navigate('SignUp')
  }

  FacebookIcon = (props: any) => (
    <Icon {...props} name='facebook' />
  );

  GoogleIcon = (props: any) => (
    <Icon {...props} name='google' />
  );

  render() {
    const { email, password } = this.state;

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
          <Input
            value={password}
            onChangeText={this.handlePasswordChange}
            placeholder="Password"
            size="large"
            style={styles.input}
            secureTextEntry={true}
            autoCapitalize="none"
          />

          <Text
            style={[styles.textRight, styles.boldText]}
            onPress={this.goToForgotPassword} status="info">
            Forgot password?
        </Text>

          <Button style={styles.actionButon} onPress={this.submitSignIn} size="large">
            LOGIN
        </Button>

          <View style={styles.buttons}>
            <Button style={styles.button} appearance='outline' accessoryLeft={this.FacebookIcon}></Button>
            <Button style={styles.button} appearance='outline' accessoryLeft={this.GoogleIcon}></Button>
          </View>

          <Text style={styles.textCenter}>
            Don't have an account?
            <Text style={[styles.textCenter, styles.boldText]} status="info" onPress={this.goToSignUp}> SignUp </Text>
          </Text>

          <Text style={styles.textCenter}>

          </Text>
        </Layout>
      </SafeAreaView>)
  }
}

const mapStateToProps = (state: any) => {
  state = state.authReducer.signInReducer
  return {
    error: state.error,
    success: state.success
  }
};

const mapDispatchToProps = (dispatch: any) => ({
  signIn: (req: SignInRequest) => {
    dispatch(authActions.signIn(req));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);