import React, { Component } from 'react';
import { Layout, Avatar, Text, Divider } from '@ui-kitten/components';
import { Image, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ProfileScreen extends Component {

  listTypeButton = (title: string) => {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} category='h6'>{title}</Text>
      </TouchableOpacity>)
  }

  onSignOut = () => {
    alert("Signout Clicked")
  }

  render() {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.imageContainer}>
          <Image source={{ uri: "https://www.w3schools.com/howto/img_avatar.png" }} style={styles.avatar} />
          <Text style={styles.avatarTitle} category='h4'>Deepanshu Tyagi</Text>
          <Text category='h6' style={styles.avatarLocation}>Monteral</Text>
        </Layout>
        {this.listTypeButton("Payment Methods")}
        {this.listTypeButton("Invite Friends")}
        {this.listTypeButton("Settings")}
        {this.listTypeButton("Sign Out")}
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "column",
    padding: 10
  },
  imageContainer: {
    flexDirection: "column",
    alignItems:"center"
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 10
  },
  avatarTitle: {
    fontWeight:"bold"
  },
  avatarLocation:{
    marginBottom: 30
  },
  button: {
    borderBottomWidth: 1
  },
  buttonText: {
    marginBottom: 15,
    paddingStart: 15,
    marginTop: 10,
    fontWeight:"bold"
  }
});