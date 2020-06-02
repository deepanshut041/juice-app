import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './components/auth/SignInScreen';
import SignUpScreen from './components/auth/SignUpScreen';
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ProfileScreen from './components/ProfileScreen';
import ResetPasswordScreen from './components/auth/ResetPasswordScreen';
import ForgotPasswordScreen from './components/auth/ForgotPasswordScreen';
import SplashScreen from './components/SplashScreen';

const Stack = createStackNavigator();

export default class App extends Component {

  state = {
    userToken: null,
    isLoading: true
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {!this.state.userToken ? (
            <>
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
              <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            </>
          ) : (
              <>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
              </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

