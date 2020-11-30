import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import DefaultLayout from './app/layout/DefaultLayout'

export default function App() {
  return (
    <NativeRouter>
      <DefaultLayout>
        <View style={styles.container}>
          <Text>mubashir</Text>
        </View>
      </DefaultLayout>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
