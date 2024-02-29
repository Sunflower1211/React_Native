import * as React from 'react';
import 'react-native-gesture-handler';
import Test from './Test'
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
