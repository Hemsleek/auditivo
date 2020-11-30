import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar,Platform, TouchableOpacity , Touch} from 'react-native'

export default function Discover() {
    const discoverTab = 'TRENDING,TOP SONGS,TOP ALBUMS,RECENTLY ADDED'.split(',')
    const [tab,setTab] = useState(0)
    return (
        <View style={styles.handleStatusBar}>
            <ScrollView horizontal={true}>
               
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
                <View>

                </View>
            </ScrollView>
              
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
       
        // borderColor:'yellow'

        // paddingHorizontal:8
    },
    tab:{
        // alignSelf:'stretch',
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
    }
})

