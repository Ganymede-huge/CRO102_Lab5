// B5


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import viewApp from './viewApp'

const runApp = () => {

    return (
        <Provider store={store}>
            <viewApp />
        </Provider>
    )
}

export default runApp

const styles = StyleSheet.create({})