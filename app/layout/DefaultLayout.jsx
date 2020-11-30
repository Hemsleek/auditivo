import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'

export default function DefaultLayout({children}) {

    const tabs = [
        { name:'Feed', icon:require('../assets/icon.png') },
        { name:'Playlists', icon:require('../assets/icon.png') },
        { name:'Discover', icon:require('../assets/icon.png') },
        { name:'Search', icon:require('../assets/icon.png') },
        { name:'My Library', icon:require('../assets/icon.png') }
    ]
    
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, backgroundColor:'black'}}>
                {children}
                <View style={styles.tabs}>
                    {
                        tabs.map((tab,tabIndex) => (
                            <View key={`screenTab_${tabIndex}`} style={styles.tab}>
                                <Image  style={styles.tabIcon}source={tab.icon} />
                                <Text style={styles.screenText}>{tab.name}</Text> 
                            </View>))
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tabs:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        borderTopWidth:1,
        borderColor:'gray',
        borderStyle:'solid',
        paddingVertical:15,
        paddingHorizontal:20,
        backgroundColor:'rgba(0,0,0,1)',
        
    },
    tab:{
        alignItems:'center',
        
    },
    tabIcon:{
        width:18,
        height:18,
        marginBottom:6
    },
    screenText:{
        color:'#f5f5f5'
    }
})

  