import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { View } from 'react-native'
import RootNavigator from './navigator'

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={{flex:1}}>
          <RootNavigator />
        </View>
      </Provider>
    )
  }
}