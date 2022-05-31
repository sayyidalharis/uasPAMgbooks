//default codes
import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
//import scroll view
import { ScrollView } from 'react-native-gesture-handler';
//import async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavBooks = ({route, navigation}) => {

    //get books from route
    const {books} = route.params;
    console.log(books);

    //make a delete book function
    const deleteBook = async (book) => {
        //function to get all current favorite books
        const getFavBooks = async () => {
            try {
                const value = await AsyncStorage.getItem('favBooks');
                if (value !== null) {
                    // console.log(value);
                    return value;
                }
                else{
                    console.log('no value');
                }
            } catch (e) {
                console.log(e);
            }
        }
        //get all current favorite books
        const favBooks = await getFavBooks();
        console.log(favBooks);
        //delete the book from the list
        const favBooksZ = JSON.parse(favBooks);
        favBooksZ.forEach((favBook, index) => {
            if(favBook.id === book.id){
                favBooksZ.splice(index, 1);
            }
        });
        //set the new list of favorite books
        try {
            await AsyncStorage.setItem('favBooks', JSON.stringify(favBooksZ));
            alert('deleted fav book');
            //navigate back to favbooks with the new list
            navigation.navigate('FavBooks', {books: favBooksZ});
        }
        catch (e) {
            console.log(e);
        }
    }

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
                //scrollview
                //touchable
                <View key={index}>
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
                    {/* //button to delete book from favorites */}
                    <Button title="Delete" onPress={() => {
                        //delete book from favorites
                        deleteBook(book);
                    }
                    }/>
                </View>
            )
        }
        )
    }
    return (
        //use scroll view
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* display data from the books */}
            {displayData()}
            
        {/* button to clear favorite books in storage */}
        <Button title="Clear All Favorite Books" onPress={async () => {
            try {
                await AsyncStorage.removeItem('favBooks');
                alert('Favorite Books Cleared');
                //navigate back to home screen
                navigation.navigate('Home');
            } catch (e) {
                console.log(e);
            }
        }} />
        </View>
        </ScrollView>
    )
}

export default FavBooks;
