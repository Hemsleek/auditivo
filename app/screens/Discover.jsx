import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar,Platform, TouchableOpacity , Image} from 'react-native'

//svg icons
import PlaySvg from '../components/icons/Play'


export default function Discover() {
    const discoverTab = 'TRENDING,TOP SONGS,TOP ALBUMS,RECENTLY ADDED'.split(',')
    const options = 'All,Hip-Hop,Afrobeats,Latin,Reggae/Dancehall,R&B,Pop,Electronic,Instrumental,Podcast'.split(',')

    const defaultSongs = [
        {coverPhoto:require('../assets/cover0.jpg'),artisteName:'Lil Wayne', title : 'No ceiling 3 (Side A)',watched:'1.36M',loved:'3.72k',ReUp:624},
        {coverPhoto:require('../assets/cover0.jpg'),artisteName:'Lil Wayne', title : 'No ceiling 3 (Side A)',watched:'1.36M',loved:'3.72k',ReUp:624},
        {coverPhoto:require('../assets/cover0.jpg'),artisteName:'Lil Wayne', title : 'No ceiling 3 (Side A)',watched:'1.36M',loved:'3.72k',ReUp:624},
        {coverPhoto:require('../assets/cover0.jpg'),artisteName:'Lil Wayne', title : 'No ceiling 3 (Side A)',watched:'1.36M',loved:'3.72k',ReUp:624},
        {coverPhoto:require('../assets/cover0.jpg'),artisteName:'Lil Wayne', title : 'No ceiling 3 (Side A)',watched:'1.36M',loved:'3.72k',ReUp:624},
        {coverPhoto:require('../assets/cover0.jpg'),artisteName:'Lil Wayne', title : 'No ceiling 3 (Side A)',watched:'1.36M',loved:'3.72k',ReUp:624},
        {coverPhoto:require('../assets/cover0.jpg'),artisteName:'Lil Wayne', title : 'No ceiling 3 (Side A)',watched:'1.36M',loved:'3.72k',ReUp:624},
        {coverPhoto:require('../assets/cover0.jpg'),artisteName:'Lil Wayne', title : 'No ceiling 3 (Side A)',watched:'1.36M',loved:'3.72k',ReUp:624},
        {coverPhoto:require('../assets/cover0.jpg'),artisteName:'Lil Wayne', title : 'No ceiling 3 (Side A)',watched:'1.36M',loved:'3.72k',ReUp:624}
    ]
    const actions = 'watched,loved,ReUp'.split(',')

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
                         style={[styles.tab,tab==itemIndex && styles.orangeBorder]}>
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
               <View style={styles.mixSong}>
                   <Image style={{ width:20,height:20 }} source={ require('../assets/icon.png') } />
               </View>
            </View>
           
            <View>
                <ScrollView >
                    <View style={styles.main}>
                        {
                            defaultSongs.map((song , songIndex)=> (
                              <View style={styles.defaultSong}  key={`defaultSong_${songIndex}`} >
                                  <Image style={{width:80,height:80}} source={song.coverPhoto} />
                                  <View style={styles.songOption}>
                                    <View style={styles.songTextContainer}>
                                        <Text style={styles.songText}>
                                            {song.artisteName}
                                        </Text>
                                        <Text style={styles.songText}>
                                            {song.title}
                                        </Text>

                                        <View style={styles.actionContainer}>
                                            <PlaySvg />
                                            {
                                                actions.map(action =>   
                                                    <View style={styles.action}key={`action-${action}`}>
                                                        
                                                        <Text style={styles.actionText}>{song[action]}</Text>
                                                    </View>
                                                    )
                                            }
                                            
                                        </View>
                                    </View>
                                    <View>
                                        <View>
                                            <Image />
                                        </View>
                                        <Image />
                                    </View>
                                  </View>
                              </View>  
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
              
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
        fontSize:18,
        fontWeight:'bold',
        marginHorizontal:8

    },
    orangeBorder:{
        borderColor:'orange'
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
    mixSong:{
        height:'100%' ,
        width:50, 
        alignItems:'center', 
        justifyContent:'center'
    },
    main:{
        flex:1,
        paddingBottom:7
    },
    defaultSong:{
        flexDirection:'row',
        paddingHorizontal:15,
        alignItems:'center',
        paddingVertical:10
    },
    songOption:{
        flex:1,
        flexDirection:'row',
        marginLeft:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    songTextContainer:{

    },
    songText:{
        color:'white'
    },
    actionContainer:{
        flexDirection:'row'
    },
    action:{
        marginRight:7
    },
    actionText:{
        color:'white'
    }
})

