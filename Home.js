
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Test({navigation}) {
  return (
    <View style={styles.container}>
        <Button title='Go to test' onPress={() => navigation.navigate('Test')} />
        <Text>Home</Text>
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