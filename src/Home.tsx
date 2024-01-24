import { StyleSheet, View } from 'react-native';

import { Content } from './components/Content';
import { Header } from './components/Header';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3CD079'
  }
});
