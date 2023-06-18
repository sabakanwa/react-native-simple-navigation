import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> welcome to the Home Screen</Text>
      <Button title="Go to profile" onPress={handleLogin} />
    </View>
  );
};

export default HomeScreen;