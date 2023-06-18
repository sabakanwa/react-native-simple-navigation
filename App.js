import React from 'react';
import Navigation from './Navigation';

const App = () => {
  return <Navigation />;
};

export default App; 

/* import React from 'react';
import { NavigationContainer } from 'react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation/bottom-tabs';
import { createStackNavigator } from 'react-navigation/stack';

// Import screens
import HomeScreen from 'HomeScreen';
import ProfileScreen from 'ProfileScreen';
import LoginScreen from 'LoginScreen';

// Create stack navigator for profile screen
const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

// Create stack navigator for home screen
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

// Create bottom tab navigator
const Tab = createBottomTabNavigator();
const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
 */