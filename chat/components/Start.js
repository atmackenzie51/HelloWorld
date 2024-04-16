import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ImageBackground } from 'react-native';

const Start = ({ navigation }) => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img/background-image.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      />
      <Text>Hello!</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder='Set your username here!'
      />
      <Button
        title="Go to Chat Screen"
        onPress={() => navigation.navigate('Chat', { name: name })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15
  }
});

export default Start;