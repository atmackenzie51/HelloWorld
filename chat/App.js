import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import the screens
import Chat from './components/Chat';
import Start from './components/Start';

//import React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.blue}>Hello World!</Text>
        <Text style={styles.bigRed}>How are you?</Text>
        <Text style={[styles.blue, styles.bigRed]}>I am feeling blue...</Text>
        <View style={styles.box}>

        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
  },
  blue: {
    color: 'blue',
    fontWeight: '600',
  },
  bigRed: {
    color: 'red',
    fontSize: 30,
  },
});

export default App;
