import React, { useState } from 'react';
import { View, Text, Button, TextInput,StyleSheet,Image } from 'react-native';
import axios from 'axios';
import SearchBar from './SearchBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
    return (
      <View style={Style.container}>
        <Image
                style={{width: 100, height: 100}}
                source={require('../image/Book.png')}
            />
        {/* <Text>Home Screen ni bousz</Text> */}
        {/* //   display SearchBar */}
        <SearchBar onSearch={(search) => {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyD2bU60Qjtx2JEzpbWI7kQZTsRV6YEwVWQ'+'&maxResults=24')
            .then(res => {
                navigation.navigate('Main', {search: search, books: res.data.items});
                // console.log(res.data.items);
            })
            .catch(err => {
                console.log(err);
            })
        }} />
        <Button title="Display Favorite Books" onPress={async () => {
            try {
                const favBooks = await AsyncStorage.getItem('favBooks');
                //navigate only if there is data
                if(favBooks !== null){
                    navigation.navigate('FavBooks', {books: JSON.parse(favBooks)});
                }
                else{
                    navigation.navigate('FavBooks', {books: []});
                }
            } catch (e) {
                console.log(e);
            }
        }} />
      </View>
    );
  }
  
  const Style = StyleSheet.create({
    container:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
    }
  })

export default HomeScreen;