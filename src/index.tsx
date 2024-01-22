import { StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { Header } from './components/Header';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
