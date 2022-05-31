import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios';
import SearchBar from './SearchBar';

const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen ni bousz</Text>
        {/* //   display SearchBar */}
        <SearchBar onSearch={(search) => {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyD2bU60Qjtx2JEzpbWI7kQZTsRV6YEwVWQ'+'&maxResults=10')
            .then(res => {
                navigation.navigate('Main', {search: search, books: res.data.items});
                // console.log(res.data.items);
            })
            .catch(err => {
                console.log(err);
            })
        }} />
      </View>
    );
  }
  

export default HomeScreen;