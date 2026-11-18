import React, { useState } from 'react';
import { ScrollView, Text, Image, Button, Alert,StyleSheet, View, FlatList, StatusBar,TouchableOpacity, SectionList } from 'react-native';


const randomdata = [
    {key:'a'},
    {key:'b'},
    {key:'c'},
    {key:'d'},
    {key:'e'},
    {key:'f'},
    {key:'g'},
    {key:'h'},
    {key:'i'},
    {key:'j'},
    {key:'k'},
    {key:'l'},
    {key:'m'},
    {key:'n'},
    {key:'o'},
    {key:'p'},
    {key:'q'},
    {key:'r'},
    {key:'s'},
    {key:'t'},
    {key:'u'},
    {key:'v'},
    {key:'w'},
    {key:'x'},
    {key:'y'},
    {key:'z'},

]

export default function App() {
    return (
        <ScrollView style={styles.container}>
            <Text>Activity 1</Text>
            <FlatList data={randomdata} renderItem={renderItem} />
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop:20,
        marginBottom:10,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle:{
        fontSize:15,
        margin:10,
        textAlign:"left"
    }
});
