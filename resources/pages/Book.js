//default codes
import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
//import scroll view
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';


const Book = ({route, navigation}) => {

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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Book Screen</Text>
            {/* display image link thumbnail as an image */}
            <Image
                style={{width: 100, height: 100}}
                source={{uri: book.volumeInfo.imageLinks.thumbnail}}
            />
            {/* add book into favorite books */}
            <Button
                title="Add to Favorite"
                onPress={() => addFavBook(book)}
            />
            {/* add button to go to the book link with expo browser */}
            <Button
                title="Go to Book Link"
                onPress={() => WebBrowser.openBrowserAsync(book.volumeInfo.infoLink)}
            />

            {/* display title if there is one */}
            {book.volumeInfo.title !== undefined ? <Text>{book.volumeInfo.title}</Text> : <Text>No title</Text>}
            {/* display author if there is one */}
            {book.volumeInfo.authors !== undefined ? <Text>{book.volumeInfo.authors}</Text> : <Text>No author</Text>}
            {/* display publisher if there is one */}
            {book.volumeInfo.publisher !== undefined ? <Text>{book.volumeInfo.publisher}</Text> : <Text>No publisher</Text>}
            {/* display published date if there is one */}
            {book.volumeInfo.publishedDate !== undefined ? <Text>{book.volumeInfo.publishedDate}</Text> : <Text>No published date</Text>}
            {/* display description if there is one */}
            {book.volumeInfo.description !== undefined ? <Text>DESKRIPSI BUKU : {book.volumeInfo.description}</Text> : <Text>No description</Text>}
            {/* display page count if there is one */}
            {book.volumeInfo.pageCount !== undefined ? <Text>{book.volumeInfo.pageCount}</Text> : <Text>No page count</Text>}
            {/* display categories if there is one */}
            {book.volumeInfo.categories !== undefined ? <Text>{book.volumeInfo.categories}</Text> : <Text>No categories</Text>}
            {/* display average rating if there is one */}
            {book.volumeInfo.averageRating !== undefined ? <Text>{book.volumeInfo.averageRating}</Text> : <Text>No average rating</Text>}
            {/* display ratings count if there is one */}
            {book.volumeInfo.ratingsCount !== undefined ? <Text>{book.volumeInfo.ratingsCount}</Text> : <Text>No ratings count</Text>}
            {/* display language if there is one */}
            {book.volumeInfo.language !== undefined ? <Text>{book.volumeInfo.language}</Text> : <Text>No language</Text>}
            {/* display info link if there is one */}
            {book.volumeInfo.infoLink !== undefined ? <Text>{book.volumeInfo.infoLink}</Text> : <Text>No info link</Text>}
        </View>
        </ScrollView>
    )
    
}

export default Book;