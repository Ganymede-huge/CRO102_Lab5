import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tang, giam } from store
import store from './store'

const Dem = () => {
    const dem = useSelector(state => state.dem)
    const dispatch = UseDispatch()
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Dem: {count}</Text>
            <Button title='Tang'
                onPress={() => dispatch(tang())}

            />

            <Button title='Giam'
                onPress={() => dispatch(giam())}

            />
        </View>
    )
}

export default Dem

const styles = StyleSheet.create({})