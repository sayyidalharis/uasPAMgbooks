import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
//import scroll view
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import SearchBar from './SearchBar';
//import touchable
import { TouchableOpacity } from 'react-native-gesture-handler';
//import book screen
import Book from './Book';

const Main = ({route, navigation}) => {
    //get books from route
    const {books} = route.params;
    //get search text from route
    const {search} = route.params;
    console.log(books);
    

    //make a function that can display data
    const displayData = () => {
        //if there is no data, display a message
        if(books.length === 0){
            return <Text>No data</Text>
        }
        //set books to only books that have thumbnail
        books.forEach(book => {
            if(book.volumeInfo.imageLinks === undefined){
                book.volumeInfo.imageLinks = {thumbnail: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'};
            }
        });
        //display books
        return books.map((book, index) => {
            return (
                //touchable
                <TouchableOpacity key={index} onPress={() => {
                    navigation.navigate('Book', {book: book});
                }}>
                    <View key={index}>
                    {/* display image link thumbnail as an image */}
                        <Image
                            style={{width: 100, height: 100}}
                            source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                        />
                    {/* display title */}
                        <Text>{book.volumeInfo.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        )
    }

    return (
        //use scroll view
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Main Screen</Text>
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
          <Text>{search}</Text>
          {/* display data */}
            {displayData()}
        <Button
            onPress={() => navigation.goBack()}
            title="Go home"
        />
        </View>
        </ScrollView>
      );
}

export default Main;