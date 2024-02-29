
import { Button, StyleSheet, Text, View } from 'react-native';


export default function Test({navigation}) {
  return (
    <View style={styles.container}>
        <Button title='Go to test' onPress={() => navigation.navigate('Home')} />
        <Text>Test</Text>
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