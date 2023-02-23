import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Genius } from './screens/Genius';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
      <Genius />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
