import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from "react-redux";

import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { myTheme } from "./custom-theme";

import SignInScreen from './features/auth/SignInScreen';
import SignUpScreen from './features/auth/SignUpScreen';
import HomeScreen from "./features/home/HomeScreen";
import AboutScreen from "./features/extras/AboutScreen";
import ProfileScreen from './features/profile/ProfileScreen';
import ResetPasswordScreen from './features/auth/ResetPasswordScreen';
import ForgotPasswordScreen from './features/auth/ForgotPasswordScreen';

import { store } from './data/store';
import { setupHttpConfig } from './data/utils/http';

const Stack = createStackNavigator();

export default class App extends Component {

  state = {
    userToken: null,
    isLoading: true
  }

  constructor(props: any) {
    super(props);
    setupHttpConfig()
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
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...myTheme }}>
          <NavigationContainer>
            <Stack.Navigator>
              {!this.state.userToken ? (
                <>
                  <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'SIGN IN', headerTitleStyle: { alignSelf: 'center' } }} />
                  <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'SIGN UP' }} />
                  <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ title: 'RESET PASSWORD' }} />
                  <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'FORGOT PASSWORD' }} />
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
        </ApplicationProvider>
      </ReduxProvider>
    );
  }
}

