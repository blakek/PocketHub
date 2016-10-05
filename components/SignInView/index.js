import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SocialIcon } from 'react-native-elements'

export const SignInView = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      PocketHub
    </Text>

    <Text style={styles.instructions}>
      To get started, sign in using your GitHub account
    </Text>

    <SocialIcon
      title='Sign In With GitHub'
      button
      type='github'
      style={{
        paddingLeft: 20,
        paddingRight: 20
      }}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3fcff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 25
  }
})

export default SignInView
