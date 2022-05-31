import React, { useState } from 'react';
import { View, Text, Button, TextInput,StyleSheet,Image } from 'react-native';

//make a function that makes a searchbar that can receive a text to pass to the search function
const SearchBar = ({onSearch}) => {
    const [searchText, setSearchText] = useState('');
    return (
        <View style={Style.container}>
            {/*display book.png as an image*/}
            
            <TextInput
                style={Style.searchbar}
                onChangeText={text => setSearchText(text)}
                value={searchText}
                placeholder="Search for a book"
            /> 
            <View style={Style.buttonsearch}>
                <Button 
                    title="Search"
                    onPress={() => onSearch(searchText)}
                />
            </View>
            
        </View>
    );
};

const Style = StyleSheet.create({
    
    container:{
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchbar:{
        //flex: 3,
        flexDirection: 'row',  
        borderColor: 'gray', 
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        width: 250,
        marginBottom: 20,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },

    buttonsearch:{
        //flex: 1,
        //flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },

  })

export default SearchBar;