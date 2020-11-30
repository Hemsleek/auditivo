import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default function DefaultLayout({children}) {
    const tabs = 'Feed,Playlists,Discover,Search,My Library'.split(',')
    return (
        <SafeAreaView>
            {children}
            <View style={style.tabs}>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
