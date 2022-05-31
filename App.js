import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './resources/pages/Main.js';
import HomeScreen from './resources/pages/Home.js';
import Book from './resources/pages/Book.js';

const Stack = createStackNavigator();

function App() {
  const ref = React.useRef(null);

  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShow : false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={Main} /> 
        <Stack.Screen name="Book" component={Book} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
