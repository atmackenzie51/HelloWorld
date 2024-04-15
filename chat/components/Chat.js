import { StyleSheet, View, Text, Button } from 'react-native';

const Chat = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Chat;