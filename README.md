# React Native Chat Application

This is a mobile messaging app built using React Native. It allows the user to:
- select their desired background color from 4 presets
- interface in a "chatroom" with other users
- share images, send their location, and access existing messages offline. 

It operates for iOS and Android devices, leveraging Google Firestore/Firebase for message and image storage. Guest authentication is managed through Google Firebase authentication.

## Technologies Used

* React Native
* Expo
* Expo ImagePicker
* Expo Location
* Google Firestore/Firebase
* Gifted Chat Library
* Android Studio


## Dependencies Required

* @react-navigation/native: ^6.1.17
* @react-navigation/native-stack: ^6.9.26
* expo: ~50.0.13
* expo-status-bar: ~1.11.1
* firebase: ^10.3.1
* react: "18.2.0
* react-native: 0.73.5
* react-native-gifted-chat: ^2.4.0
* react-native-safe-area-context: 4.8.2
* react-native-screens: ~3.29.0
* @react-native-async-storage/async-storage: 1.21.0
* @react-native-community/netinfo: 11.1.0
* expo-image-picker: ~14.7.1
* expo-location: ~16.5.5
* react-native-maps: 1.10.0

## How to Setup the Project

### Initial Preparation

* use Node.js version 16

`nvm install 16.19.0`
`nvm use 16.19.0`
`nvm alias default 16.19.0`

### Utilizing Google Firestore/Firebase

* Create an account and a new project
* Obtain the configuration code, and replace it in the App.js file
* Set up the database under build --> Firestore Database
* Activate storage
* Change rules to: 

`allow read, write: if true`

For database and storage

* Activate 'anonymous authentication' under Rules for both Storage and Project

## Installation Procedure
To get started with the React Native MobileChat application, follow the steps below:

1. Clone the Repository 

`git clone https://github.com/atmackenzie51/React-Native-MobileChat`

2. Navigate to the Project Directory
3. Install the Project Dependencies

`npm install`

4. Start the Expo Project

`npx expo start`

## Testing Options

You have the following options for testing the application:

* Expo App: Download and connect the Expo app on your mobile device.
* Android Testing: Use Android Studio for testing. The application has been tested with a Google Pixel 8 device.

