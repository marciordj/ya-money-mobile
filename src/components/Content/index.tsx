import { View, StyleSheet } from 'react-native';
import { Surface, Text, useTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Content() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.moneyInfo}>
        <Surface mode='elevated' style={styles.surface}>
          <Icon name='currency-usd' color={theme.colors.success} size={30} />
          <View>
            <Text style={styles.type}>Receita</Text>
            <Text style={styles.currency}>R$ 4.231.00</Text>
          </View>
        </Surface>
        <Surface mode='elevated' style={styles.surface}>
          <Icon name='currency-usd' color='#f2615a' size={30} />
          <View>
            <Text style={styles.type}>Despesa</Text>
            <Text style={styles.currency}>R$ 4.231.00</Text>
          </View>
        </Surface>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d9d9d9',
    flex: 1,
    marginTop: 22,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48
  },
  moneyInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 41
  },
  surface: {
    flexDirection: 'row',
    height: 59,
    width: 163,
    borderRadius: 13,
    alignItems: 'center'
  },
  type: {
    fontSize: 11
  },
  currency: {
    fontWeight: 'bold'
  }
});
