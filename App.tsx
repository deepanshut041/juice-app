import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from "react-redux"
import SignInScreen from './features/auth/SignInScreen';
import SignUpScreen from './features/auth/SignUpScreen';
import HomeScreen from "./features/home/HomeScreen";
import AboutScreen from "./features/extras/AboutScreen";
import ProfileScreen from './features/profile/ProfileScreen';
import ResetPasswordScreen from './features/auth/ResetPasswordScreen';
import ForgotPasswordScreen from './features/auth/ForgotPasswordScreen';
import { store } from './data/store';

const Stack = createStackNavigator();

export default class App extends Component {

  state = {
    userToken: null,
    isLoading: true
  }

  componentDidMount() {
    AsyncStorage.getItem("access-token", (err, res) => {
      this.setState({ userToken: (err) ? null : res, isLoading: false })
    })
  }

  render() {
    if (this.state.isLoading) {
      return null
    }
    return (

      <ReduxProvider store={store}>
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
      </ReduxProvider>
    );
  }
}

