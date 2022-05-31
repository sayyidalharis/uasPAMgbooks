//default codes
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
//import scroll view
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';



const Book = ({route, navigation}) => {


    // function async load font
    
    //load fonts
    
    



    

    //get book from route
    const {book} = route.params;

    
    //add new favorite book to storage
    const addFavBook = async (book) => {
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
        //if there are no favorite books, set the new book as the first favorite book
        console.log("Masuk IF")
        if(favBooks === undefined || favBooks === null){
            console.log('set fav books');
            //add this book id to storage
            try {
                await AsyncStorage.setItem('favBooks', JSON.stringify([book]));
                alert('added fav book');
            }
            catch (e) {
                console.log(e);
            }
        }
        //if there are favorite books, add the new book to the list
        else{
            //check every book in the list to see if the book is already in the list
            let isInList = false;
            //make favbooks into an array
            const favBooksZ = JSON.parse(favBooks);
            favBooksZ.forEach(favBook => {
                if(favBook.id === book.id){
                    isInList = true;
                }
            });

            if(isInList===false){
                const newFavBooks = [...JSON.parse(favBooks), book];
                //save the new favorite books to storage
                try {
                    await AsyncStorage.setItem('favBooks', JSON.stringify(newFavBooks));
                    alert('added fav book');
                } catch (e) {
                    console.log('error saving fav books');
                }
            }
            else{
                //the book is already in the list
                //alert the user
                alert('book already in list');
            }
        }
    }

    return (
        <ScrollView>
        <View style={Style.container}>
            <Text style={Style.header}>Book Details</Text>
            {/* display image link thumbnail as an image */}
            <Image
                source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                style={Style.gambar}
            />
            {/* add book into favorite books */}
            <Button
                title="Add to Favorite"
                onPress={() => addFavBook(book)}
                style={Style.button}
            />
            
            <View style={Style.detail}>
                {/* display title if there is one */}
                {book.volumeInfo.title !== undefined ? <Text style={Style.judul}>{book.volumeInfo.title}</Text> : <Text>No title</Text>}
                {/* display author if there is one */}
                {book.volumeInfo.authors !== undefined ? <Text>Author: {book.volumeInfo.authors}</Text> : <Text>No author</Text>}
                {/* display publisher if there is one */}
                {book.volumeInfo.publisher !== undefined ? <Text>Publisher: {book.volumeInfo.publisher}</Text> : <Text>No publisher</Text>}
                {/* display published date if there is one */}
                {book.volumeInfo.publishedDate !== undefined ? <Text>Published Date: {book.volumeInfo.publishedDate}</Text> : <Text>No published date</Text>}
                {/* display description if there is one */}
                <Text>Description:</Text>
                {book.volumeInfo.description !== undefined ? <Text style={Style.desc}>     {book.volumeInfo.description}</Text> : <Text>No description</Text>}
                {/* display page count if there is one */}
                {book.volumeInfo.pageCount !== undefined ? <Text>Halaman: {book.volumeInfo.pageCount}</Text> : <Text>No page count</Text>}
                {/* display categories if there is one */}
                {book.volumeInfo.categories !== undefined ? <Text>Categories: {book.volumeInfo.categories}</Text> : <Text>No categories</Text>}
                {/* display average rating if there is one */}
                {book.volumeInfo.averageRating !== undefined ? <Text>Rating: {book.volumeInfo.averageRating}</Text> : <Text>No average rating</Text>}
                {/* display ratings count if there is one */}
                {book.volumeInfo.ratingsCount !== undefined ? <Text>Rating Count: {book.volumeInfo.ratingsCount}</Text> : <Text>No ratings count</Text>}
                {/* display language if there is one */}
                {book.volumeInfo.language !== undefined ? <Text>Language: {book.volumeInfo.language}</Text> : <Text>No language</Text>}
                {/* add button to go to the book link with expo browser */}
            </View>
            <Button
                title="Go to Book Link"
                onPress={() => WebBrowser.openBrowserAsync(book.volumeInfo.infoLink)}
                style={Style.button2}
            />
        </View>
        </ScrollView>
    )
    
    
}
const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fce5cd',
        height: '100%',
        paddingBottom: 35,
    },

    gambar: {
        width: 150, 
        height: 150,
        marginBottom: 20,
        marginTop: 20,
    },

    detail: {
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'sans-serif-condensed',
        
    },


    button: {
        color: 'black',
    },
    
    desc: {
        textAlign: 'justify',
        marginBottom: 10,
        
        
    },
    judul:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },  
    
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default Book;