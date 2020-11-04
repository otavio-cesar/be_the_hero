/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import SplashScreen from 'react-native-splash-screen';

import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Hello OmniStack</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
