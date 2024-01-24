import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

export function Header() {
  return (
    <View style={styles.container}>
      <Avatar.Text label='LM' size={48} />
      <View style={styles.containerText}>
        <Text style={styles.text}>Olá,</Text>
        <Text style={styles.text}>Márcio Rodrigues</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 83,
    marginLeft: 17
    // backgroundColor: 'red'
  },
  containerText: {
    marginLeft: 10
  },
  text: {
    color: '#fff'
  }
});
