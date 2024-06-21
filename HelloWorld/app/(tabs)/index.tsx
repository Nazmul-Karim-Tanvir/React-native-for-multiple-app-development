import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceList] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput style={{
          width: "80%",
          borderBottomWidth: 1,
          borderColor: "GREEN",
          padding: 7
        }}
          placeholder="Add a Place"
          value={inputValue}
          onChangeText={text => setInputValue(text)}
        />
        <Button
          title="Add"
          onPress={() => {
            if (inputValue !== "") {
              setPlaceList([...placeList, inputValue])
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  inputView: {
    padding: 20,
    width: "100%",
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

