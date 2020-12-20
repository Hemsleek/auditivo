import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';


import DefaultLayout from './app/layout/DefaultLayout';
import Discover from './app/screens/Discover'
import Feed from './app/screens/Feed'
import Playlist from './app/screens/Playlist'
import Search from './app/screens/Search'
import Library from './app/screens/Library'

export default function App() {
  return (
    <NativeRouter>
      <DefaultLayout>
        <Switch>
          <Route path='/' exact component={Discover} />
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
