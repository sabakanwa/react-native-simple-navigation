 import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
 
/* import React from 'react';
import { View, Text } from 'react-native';

const LoginScreen = () => (
  <View>
    <Text>Welcome to the Home Screen!</Text>
  </View>
);

export default LoginScreen;
 */