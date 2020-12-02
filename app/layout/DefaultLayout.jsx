import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'


//svg
import FeedSvg from '../components/icons/Feed'
import  SearchSvg from '../components/icons/Search'
import PlaylistSvg from '../components/icons/Playlist'
import DiscoverSvg from '../components/icons/DiscoverSvg'

const LibraryView = () => (
    <View style={styles.library}>
        <Text style={styles.libraryText}>
            A
        </Text>
    </View>
)
export default function DefaultLayout({children}) {

    const [screenTab , setScreenTab] = useState('Discover')

    const tabs = [
        { name:'Feed', icon:<FeedSvg /> },
        { name:'Playlists', icon:<PlaylistSvg /> },
        { name:'Discover', icon:<DiscoverSvg style={screenTab=='Discover'? {fill:'orange'} : {fill:'white'}}/> },
        { name:'Search', icon:<SearchSvg /> },
        { name:'My Library', icon: <LibraryView />}
    ]
    return (
        <SafeAreaView style={{flex:1}}>
             <StatusBar backgroundColor='#000' barStyle="light-content" />
            <View style={{flex:1, backgroundColor:'black'}}>
                {children}
                <View style={styles.tabs}>
                    {
                        tabs.map((tab,tabIndex) => (
                            <View 
                             key={`screenTab_${tabIndex}`} 
                             style={styles.tab}
                             onStartShouldSetResponder={() => setScreenTab(tab.name)}
                            >
                                {tab.icon}

                                <Text 
                                 style={[styles.screenText, screenTab==tab.name && {color:'orange'}]}>{tab.name}
                                </Text> 
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
        color:'rgba(255,255,255,.7)',
        paddingTop:4
    },
    library:{
        borderRadius:50,
        borderColor:'white',
        borderStyle:'solid',
        borderWidth:1,
        backgroundColor:'gray',
        alignItems:'center',
        justifyContent: 'center',
        width:22,
        height:22
    },
    libraryText:{
        color:'white'
    }
})

  