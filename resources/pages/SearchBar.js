import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

//make a function that makes a searchbar that can receive a text to pass to the search function
const SearchBar = ({onSearch}) => {
    const [searchText, setSearchText] = useState('');
    return (
        <View style={{flexDirection: 'row', margin: 10}}>
            <Text style={{flex: 1}}>Search: </Text>
            <TextInput
                style={{flex: 3, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => setSearchText(text)}
                value={searchText}
            /> 
            <Button
                title="Search"
                onPress={() => onSearch(searchText)}
            />
        </View>
    );
};

export default SearchBar;