import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert } from 'react-native';

//import the screens
import Chat from './components/Chat';
import Start from './components/Start';

//import FireStore
import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";

//import React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import connectivity check
import { useNetInfo } from '@react-native-community/netinfo';

//create the navigator
const Stack = createNativeStackNavigator();

//creating the firebase storage
import { getStorage } from "firebase/storage";

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBTjV7GVlEYq3Lh5p6SMlGEK9Yr3lnJARY",
    authDomain: "chat-bc020.firebaseapp.com",
    projectId: "chat-bc020",
    storageBucket: "chat-bc020.appspot.com",
    messagingSenderId: "1098975711985",
    appId: "1:1098975711985:web:fca77b82bca2da47a40f50"
  };

  //initialize the firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // initialize firebase to store images
  const storage = getStorage(app);

  //creating the network connectivity status check
  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              db={db}
              storage={storage}
              isConnected={connectionStatus.isConnected}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
