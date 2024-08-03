import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const handleinputchange = text => {
    alert(text);
  }
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>My fisrt react-native app</Text>
      <TextInput style={styles.input}
        placeholder='I am a place holder'
        onChangeText={text => handleinputchange(text)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
