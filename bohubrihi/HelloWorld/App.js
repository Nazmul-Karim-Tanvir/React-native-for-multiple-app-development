import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ListItem from './components/Listitem/Listitem';
import InputPlace from './components/InputPlace/InputPlace';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [placelist, setPlaceList] = useState([]);

  return (
    <View style={styles.container}>
      <InputPlace
      inputValue={inputValue}
      setInputValue={setInputValue}
      placelist={placelist}
      setPlaceList={setPlaceList}
      />
      <FlatList style={{
        width: "100%"
      }}
        data={placelist}
        renderItem={info => {
          return (
            <ListItem
              placeName={info.item.value}
              onItemPressed={() => alert(info.item.value)}
            />
          )
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  }
});
