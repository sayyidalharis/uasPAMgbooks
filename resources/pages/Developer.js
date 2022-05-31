import React, { useState } from 'react';
import { View, Text, Button, TextInput,StyleSheet,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

//make a function that makes a Developer that can receive a text to pass to the search function
const Developer = ({onSearch}) => {
    return (
        <ScrollView>
            <View style={Style.container}>
                <Text style={Style.header}>Our Team {"\n"}</Text>
                {/* make a card */}
                <View style={Style.card}>
                    <Image
                        style={Style.image}
                        source={require('../image/saet.jpg')}
                    />
                    <Text style={Style.text}>
                        Sayyid M Umar Al Haris
                        {"\n"}
                        119410190
                        {"\n"}
                        +62 882-8686-7659
                        {"\n"}
                        instagram: @sayyidhrs
                        {"\n"}

                    </Text>
                    
                </View>
                <View style={Style.card}>
                    <Image
                        style={Style.image}
                        source={require('../image/padil.jpeg')}
                    />
                    <Text style={Style.text}>
                        Fadhillah Azhar Alsani
                        {"\n"}
                        119410217
                        {"\n"}
                        +62 852-6655-9964
                        {"\n"}
                        instagram: @fadhilalsani
                        {"\n"}

                    </Text>
                    
                </View>
                <View style={Style.card}>
                    <Image
                        style={Style.image}
                        source={require('../image/simo.jpg')}
                    />
                    <Text style={Style.text}>
                        M.Daffa Massimiliano A
                        {"\n"}
                        119410139
                        {"\n"}
                        +62 877-6926-3564
                        {"\n"}
                        instagram: @daff.massimo
                        {"\n"}

                    </Text>
                    
                </View>
            </View>
        </ScrollView>
    );
};

const Style = StyleSheet.create({
    
    container:{
        //flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        backgroundColor: '#fce5cd',
        height: '100%',
        
    },
    header:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: -20,
        color: '#ab693e',

    },

    card:{
        flexDirection: 'row',
        
    },

    image:{
        width: 150,
        height: 150,
        borderRadius: 100,
        margin: 10,
        marginTop: 20,
        marginBottom: 20,
        

    },
    
    text:{
        fontSize: 16,
        padding: 10,
        margin: 10,
        paddingTop: 30,
        
    }

  })

export default Developer;