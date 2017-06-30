import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import { connect, Provider } from 'react-redux';
import LoginForm from './LoginForm.js';

export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        pendingLoginRequest: false
      }
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../assets/images/github.png')}/>
              <Text style={styles.title}>Log into Ethereal</Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm/>
          </View>
        </View>
      )
    }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    flex:1
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#FFF',
    marginTop: 15
  }
});
