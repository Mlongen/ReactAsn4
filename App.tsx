import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LoginScreen } from './screens/LoginScreen'

export default class App extends React.Component {
  render() {
    return (
      <Text>
        Oh no, I haven't done the assignment! This is the only one I haven't
        done all year, please consider it :D:D:D
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
