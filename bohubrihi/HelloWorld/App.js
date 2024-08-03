import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ListItem from './components/Listitem/Listitem';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [placelist, setPlaceList] = useState([]);

  return (
    <View style={styles.container}>

      <View style={styles.inputView}>
        <TextInput
          style={{
            width: "80%",
            borderBottomWidth: 1,
            borderColor: 'green',
            padding: 7
          }}
          placeholder="Add a Place.."
          value={inputValue}
          onChangeText={text => setInputValue(text)}
        />
        <Button
          title='Add'
          onPress={() => {
            if (inputValue !== "") {
              setPlaceList([...placelist, { key: Math.random().toString(), value: inputValue }])
            }
          }}
        />
      </View>
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
  },
  inputView: {
    padding: 20,
    width: "100%",
    margintop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
