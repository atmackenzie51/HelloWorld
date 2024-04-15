import { StyleSheet, View, Text, Button } from 'react-native';

const Start = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <Button
        title="Go to Chat Screen"
        onPress={() => navigation.navigate('Chat')}
      />
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

export default Start;