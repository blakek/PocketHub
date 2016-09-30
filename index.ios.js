/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { SignInView } from './components/SignInView'

class pockethub extends Component {
  render () {
    return (
      <SignInView />
    )
  }
}

AppRegistry.registerComponent('pockethub', () => pockethub)
