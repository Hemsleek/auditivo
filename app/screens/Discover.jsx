import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar,Platform, TouchableOpacity , Image} from 'react-native'

export default function Discover() {
    const discoverTab = 'TRENDING,TOP SONGS,TOP ALBUMS,RECENTLY ADDED'.split(',')
    const options = 'All,Hip-Hop,Afrobeats,Latin,Reggae/Dancehall,R&B,Pop,Electronic,Instrumental,Podcast'.split(',')

    const [musicType , setMusicType] = useState(0)
    const [tab,setTab] = useState(0)
    return (
        <View style={styles.handleStatusBar}>
            <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
               
                <View style={styles.discoverTabs}>
                    {
                        discoverTab.map((item, itemIndex) => 
                        <View  
                         key={`discoverTab_${itemIndex}`} 
                         onStartShouldSetResponder={() =>setTab(itemIndex)}
                         style={[styles.tab,tab==itemIndex && styles.yellowBorder]}>
                           <Text style={ [styles.tabText,tab==itemIndex && {color:'black'}] }> {item} </Text>
                        </View>)
                    }
                </View>
                
            </ScrollView>
            </View>
            <View style={styles.musicTypeContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <View style={styles.musicType}>
                    { 
                        options.map((item, itemIndex) => <Text onStartShouldSetResponder={() => setMusicType(itemIndex)} key={`musicType_${itemIndex}`} style={[styles.typeText,musicType==itemIndex && {backgroundColor:'gray'}]}>{item}</Text> )
                    }
                    </View>
                </ScrollView>
               
            </View>
           
            {/* <View style={styles.main}>
                   
            </View> */}
              
        </View>
    )
}

const styles = StyleSheet.create({
    handleStatusBar:{
        // paddingTop: Platform.OS=='android'? StatusBar.currentHeight : 0,
        flex:1,
        // backgroundColor:'red'

    },
    discoverTabs:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        alignItems:'center',
        backgroundColor:'white',
        width:'100%',
    },
    tab:{
        
        height:'100%',
        justifyContent: 'center',
        borderStyle:'solid',
        borderBottomWidth:3,
        borderColor:'transparent'
    },
    tabText:{
        color:'rgba(0,0,0,.5)',
        fontSize:17,
        fontWeight:'bold',
        marginHorizontal:8

    },
    yellowBorder:{
        borderColor:'yellow'
    },
    musicTypeContainer:{
        flexDirection:'row',
        alignItems:'center',
        height:60,
        // backgroundColor: 'red'
    },
    musicType:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        width:'100%'
    },
    typeText:{
        paddingVertical:7,
        paddingHorizontal:10,
        borderColor:'gray',
        borderWidth:1,
        borderStyle:'solid',
        color:'white',
        fontSize:12,
        borderRadius:12,
        marginHorizontal:10,
        textAlign:'center',
        fontWeight:'bold'
        
    },
    main:{
        flex:1
    }
})

