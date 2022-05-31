//default codes
import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
//import scroll view
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

const Book = ({route, navigation}) => {

    //get book from route
    const {book} = route.params;
    console.log(book);

    return (
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Book Screen</Text>
            {/* display image link thumbnail as an image */}
            <Image
                style={{width: 100, height: 100}}
                source={{uri: book.volumeInfo.imageLinks.thumbnail}}
            />
            {/* display title */}
            <Text>{book.volumeInfo.title}</Text>
            {/* display authors */}
            <Text>{book.volumeInfo.authors}</Text>
            {/* display publisher */}
            <Text>{book.volumeInfo.publisher}</Text>
            {/* display published date */}
            <Text>{book.volumeInfo.publishedDate}</Text>
            {/* display description */}
            <Text>{book.volumeInfo.description}</Text>
            {/* display page count */}
            <Text>{book.volumeInfo.pageCount}</Text>
            {/* display categories */}
            <Text>{book.volumeInfo.categories}</Text>
            {/* display average rating */}
            <Text>{book.volumeInfo.averageRating}</Text>
            {/* display ratings count */}
            <Text>{book.volumeInfo.ratingsCount}</Text>
            {/* display language */}
            <Text>{book.volumeInfo.language}</Text>
            {/* display preview link */}
            <Text>{book.volumeInfo.previewLink}</Text>
            {/* display info link */}
            <Text>{book.volumeInfo.infoLink}</Text>
        </View>
        </ScrollView>
    )
    
}

export default Book;