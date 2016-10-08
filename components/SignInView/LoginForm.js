import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button, Card, FormLabel, FormInput } from 'react-native-elements'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import Base64 from 'base-64'
import { secrets } from '../../environment.js'

/* global fetch, Headers */

export class LoginForm extends Component {
  constructor () {
    super()

    this.tryLogin = this.tryLogin.bind(this)

    this.state = {
      errorMessage: null,
      isLoading: false,
      password: '',
      token: '',
      username: ''
    }
  }

  tryLogin () {
    // Don't try to login again if we're already waiting on a response
    if (this.state.isLoading) {
      return true
    }

    this.setState({
      errorMessage: null,
      isLoading: true
    })

    const fetchConfig = {
      method: 'POST',
      headers: new Headers({
        'Authorization': 'Basic ' + Base64.encode(`${this.state.username}:${this.state.password}`),
        'Content-Type': 'application/json;charset=UTF-8'
      }),
      mode: 'cors',
      body: JSON.stringify({
        note: 'PocketHub application',
        note_url: 'https://github.com/blakek/PocketHub',
        ...secrets
      })
    }

    fetch('https://api.github.com/authorizations', fetchConfig)
      .then(response => {
        if (response.status === 401) {
          throw new Error('Failed to sign in; check your login information.')
        }
        return response.json()
      })
      .then(data => {
        this.setState({
          isLoading: false,
          token: data.token
        })
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message,
          isLoading: false
        })
      })
  }

  render () {
    return (
      <Card title='hello, world'>
        {
          this.state.errorMessage
          ? <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
          : null
        }

        <View style={styles.form}>
          <FormLabel>Username</FormLabel>
          <FormInput
            autoCapitalize='none'
            onChangeText={(username) => { this.setState({ username }) }}
            onSubmitEditing={() => { this.refs.passwordFormInput.refs.input.focus() }}
            placeholder='octocat'
            returnKeyType='next'
            value={this.state.username}
          />

          <FormLabel>Password</FormLabel>
          <FormInput
            onChangeText={(password) => { this.setState({ password }) }}
            onSubmitEditing={this.tryLogin}
            placeholder='password123'
            ref='passwordFormInput'
            returnKeyType='go'
            secureTextEntry
            textInputRef='input'
            value={this.state.password}
          />
        </View>

        <Button
          backgroundColor='#111'
          button
          disabled={this.state.isLoading}
          icon={{name: 'github', type: 'font-awesome'}}
          onPress={this.tryLogin}
          raised
          small
          style={styles.btn}
          title='Sign In With GitHub'
        />

        <KeyboardSpacer />
      </Card>
    )
  }
}

const styles = {
  btn: {
    paddingLeft: 20,
    paddingRight: 20
  },
  errorMessage: {
    color: 'tomato',
    textAlign: 'center'
  },
  form: {
    marginBottom: 18
  }
}

export default LoginForm
