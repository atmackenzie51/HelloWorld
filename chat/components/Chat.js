import { StyleSheet, View, Text, Button } from 'react-native';
import { useEffect } from 'react';

const Chat = ({ route, navigation }) => {
  const { name, background } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name })
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text>Welcome to Chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Chat;