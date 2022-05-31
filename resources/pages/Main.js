import React, { useState } from 'react';
import { View, Text, Button, Image,StyleSheet } from 'react-native';
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
                book.volumeInfo.imageLinks = {thumbnail: 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'};
            }
            //check if book has description
            if(book.volumeInfo.description === undefined){
                book.volumeInfo.description = 'There is currently no available description for this book.';
            }
        });
        //display books
        return books.map((book, index) => {
            return (
                //touchable
                <TouchableOpacity key={index} onPress={() => {
                    navigation.navigate('Book', {book: book});
                }}>
                    <View style={Style.container}>
                    <View style={Style.judul}>
                        <Text style={Style.title}>{book.volumeInfo.title}</Text>
                    </View>
                    
                        <View style={Style.catalog} key={index}>
                        {/* display image link thumbnail as an image */}
                            
                            <Image
                                style={Style.images}
                                source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                            />
                        {/* display title */}
                            
                            
                        </View>
                        <Text style={Style.desc}>{
                            //display description in 12 words
                            //check if description has more than 200 words
                            book.volumeInfo.description.length > 200 ?   book.volumeInfo.description.substring(0, 200) + '...' :   book.volumeInfo.description
                            
                        }</Text>
                    </View>
                    
                </TouchableOpacity>
            )
        }
        )
    }

    return (
        //use scroll view
        <ScrollView>
        <View style={Style.wrapper}>
          {/* <Text>Main Screen</Text> */}
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
          <Text style={Style.header}>Keyword: {search}</Text>
          {/* display data */}
            {displayData()}
        </View>
        </ScrollView>
    );

    

}
const Style = StyleSheet.create({
    container:{
        // flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        width: 300,
        backgroundColor: '#fce5cd'

    },
    catalog:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    images:{
        width: 100, 
        height: 100,
        flexDirection: 'row',
        // flexDirection: 'column',
        // alignItems: 'flex-end',
        // justifyContent: 'flex-end',
        margin: 10,
    },
    title:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 5,

    },
    wrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff4e6'
    },
    judul:{
        flex: 1,
        flexDirection: 'row',
    },

    desc:{
        textAlign: 'justify',
    },
    
    button:{
        marginTop: 40,
        marginBottom: 40,
    },

    header:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        // fontFamily: 'fantasy',
    },
});
export default Main;