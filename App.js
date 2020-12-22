import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';

import DefaultLayout from './app/layout/DefaultLayout';
import Discover from './app/screens/Discover'
import Feed from './app/screens/Feed'
import Playlist from './app/screens/Playlist'
import Search from './app/screens/Search'
import Library from './app/screens/Library'

export default function App() {

  const discoverTab = 'TRENDING,TOP SONGS,TOP ALBUMS,RECENTLY ADDED'.split(',')
  const [tab, setTab] = useState(0)

  const handleSwipe = (direction) => {
    if (direction === 'right' && tab !== 0) setTab(tab => tab - 1)
    else if (direction === 'left' && tab !== discoverTab.length - 1) setTab(tab => tab + 1)

  }
  return (
    <NativeRouter>
      <DefaultLayout handleSwipe={handleSwipe}>
        <Switch>
          <Route path='/' exact render={(props) => <Discover {...props} discoverTab={discoverTab} tab={tab} setTab={setTab} />} />
          <Route path='/feed' component={Feed} />
          <Route path='/playlist' component={Playlist} />
          <Route path='/search' component={Search} />
          <Route path='/Library' component={Library} />
        </Switch>
      </DefaultLayout>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({

});
