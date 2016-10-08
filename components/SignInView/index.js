import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LoginForm } from './LoginForm'

export const SignInView = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to PocketHub!
    </Text>

    <Text style={styles.instructions}>
      To get started, sign in using your GitHub account
    </Text>

    <LoginForm />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'blueviolet'
  },
  welcome: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 25
  }
})

export default SignInView
