import React from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'

export default function Discover() {
    const discoverTab = 'TRENDING,TOP SONGS,TOP ALBUMS,RECENTLY'.split(',')
    return (
        <View style={{flex:1}}>
            <ScrollView>
                <View style={styles.discoverTabs}>
                    {
                        discoverTab.map((item, itemIndex) => 
                        <View  key={`discoverTab_${itemIndex}`}>
                           <Text> {item} </Text>
                        </View>)
                    }
                </View>
                <View>

                </View>
            </ScrollView>  
        </View>
    )
}

const styles = StyleSheet.create({
    discoverTab:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

