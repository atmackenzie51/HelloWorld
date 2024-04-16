import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import backgroundImage from '../assets/background-image.png';


const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  const [background, setBackground] = useState('');

  return (

    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <Text style={styles.appTitle}>Chat App</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder='Your Name'
        />
        <View style={styles.chooseBackgroundContainer}>
          <Text style={styles.chooseBackgroundText}>Choose Background Color:</Text>
          <View style={styles.selectColorContainer}>
            <TouchableOpacity
              style=
              {[
                styles.selectColor,
                { backgroundColor: '#090C08' },
                background === '#090C08' && styles.selectedColor
              ]}
              onPress={() => setBackground('#090C08')}>
            </TouchableOpacity>
            <TouchableOpacity
              style=
              {[
                styles.selectColor,
                { backgroundColor: '#474056' },
                background === '#474056' && styles.selectedColor
              ]}
              onPress={() => setBackground('#474056')}>
            </TouchableOpacity>
            <TouchableOpacity
              style=
              {[
                styles.selectColor,
                { backgroundColor: '#8A95A5' },
                background === '#8A95A5' && styles.selectedColor
              ]}
              onPress={() => setBackground('#8A95A5')}>
            </TouchableOpacity>
            <TouchableOpacity
              style=
              {[
                styles.selectColor,
                { backgroundColor: '#B9C6AE' },
                background === '#B9C6AE' && styles.selectedColor
              ]}
              onPress={() => setBackground('#B9C6AE')}>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Chat', { name: name })}>
          <Text style={styles.buttonText}>Start Chatting</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appTitle: {
    flex: 1,
    fontSize: 45,
    fontWeight: "600",
    color: '#FFFFFF',
    justifyContent: "center",
    marginTop: 40,
  },
  container: {
    width: "88%",
    height: "44%",
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-evenly",
    borderRadius: 4,
  },
  textInput: {
    fontSize: 16,
    fontWeight: "300",
    color: '#757083',
    opacity: 0.5,
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15
  },
  button: {
    width: "88%",
    backgroundColor: '#757083',
    padding: 15,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  chooseBackgroundContainer: {
    width: '88%',
    alignItems: 'left',
    alignSelf: 'flex-start',
    padding: 15
  },
  chooseBackgroundText: {
    fontSize: 16,
    fontWeight: "300",
    color: '#757083',
    opacity: 1.0,
    alignItems: 'flex-start',
    marginBottom: 15
  },
  selectColorContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  selectColor: {
    width: 50,
    height: 50,
    borderRadius: 25,
    border: 3,
    marginRight: 20,
    borderColor: 'white'
  },
  selectedColor: {
    borderColor: '#9B30FF',
    borderWidth: 3
  }
});

export default Start;