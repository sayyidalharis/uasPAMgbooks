import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './resources/pages/Main.js';
import HomeScreen from './resources/pages/Home.js';
import Book from './resources/pages/Book.js';
import FavBooks from './resources/pages/FavBooks.js';
import Developer from './resources/pages/Developer.js';

const Stack = createStackNavigator();

function App() {
  const ref = React.useRef(null);

  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="G-Books API App" component={HomeScreen}options={{
          headerStyle: {
            backgroundColor: '#e2d1ba',
          },
          headerTintColor: '#ab693e',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Main" component={Main}options={{
          headerStyle: {
            backgroundColor: '#e2d1ba',
          },
          headerTintColor: '#ab693e',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} /> 
        <Stack.Screen name="Book" component={Book}options={{
          headerStyle: {
            backgroundColor: '#e2d1ba',
          },
          headerTintColor: '#ab693e',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="FavBooks" component={FavBooks}options={{
          headerStyle: {
            backgroundColor: '#e2d1ba',
          },
          headerTintColor: '#ab693e',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Developer" component={Developer}options={{
          headerStyle: {
            backgroundColor: '#e2d1ba',
          },
          headerTintColor: '#ab693e',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
