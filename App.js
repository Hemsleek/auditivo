import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter } from 'react-router-native';

import DefaultLayout from './app/layout/DefaultLayout';
import Discover from './app/screens/Discover'

export default function App() {
  return (
    <NativeRouter>
      <DefaultLayout>
        <Discover />
      </DefaultLayout>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({

});
