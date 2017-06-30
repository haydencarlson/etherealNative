import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          placeholderTextColor="rgba(255,255,255,0.7)"/>
        <TextInput
          style={styles.input}
          placeholder="Password"
          returnKeyType="go"
          placeholderTextColor="rgba(255,255,255,0.7)"
          ref={(input) => this.passwordInput = input}
          secureTextEntry/>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    marginBottom:20
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
})
