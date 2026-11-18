import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  Image,
  Button,
  Alert,
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
  SectionList
} from 'react-native';


const randomdata = [
  {
    data: [
      {key: 'a'},
      {key: 'e'},
      {key: 'i'},
      {key: 'o'},
      {key: 'u'},
    ],
    title: "Vowels", bgcolor:'red'
  },
  {
    data: [
      {key: 'b'},
      {key: 'c'},
      {key: 'd'},
      {key: 'f'},
      {key: 'g'},
      {key: 'h'},
      {key: 'j'},
      {key: 'k'},
      {key: 'l'},
      {key: 'm'},
      {key: 'n'},
      {key: 'p'},
      {key: 'q'},
      {key: 'r'},
      {key: 's'},
      {key: 't'},
      {key: 'v'},
      {key: 'w'},
      {key: 'x'},
      {key: 'y'},
      {key: 'z'},
    ],
    title: "Consonants", bgcolor:"violet"
  }
]

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={{textAlign:'center'}}>Activity 2</Text>
        <SectionList sections={randomdata} renderItem={renderItem}
                     renderSectionHeader={({section: {title,bgcolor}}) => (
                         <Text style={[styles.headertext,{backgroundColor:bgcolor}]}>{title}</Text>
                     )}/>
        <StatusBar style="auto"/>
      </View>
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
    marginTop: 20,
    marginBottom: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  opacityStyle: {
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: "left"
  },
  headertext: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
    fontWeight: "bold"
  }
});
