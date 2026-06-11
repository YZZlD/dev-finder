import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import SignupScreen from './screens/SignupScreen';
import MapScreen from './screens/MapScreen';
import GithubProfileScreen from './screens/ProfileScreen';

import { RootStackParamList } from './navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  const [usernameExists, setUsernameExists] = useState(false);
  const [loading, setLoading] = useState(true);

  //On app load check async storage for the existance of a username to conditionally show the signup screen
  useEffect(() => {
    const checkUsernameExists = async () => {
      const username = await AsyncStorage.getItem('githubUsername');

      setUsernameExists(!!username);
      setLoading(false);
    }

    checkUsernameExists();
  }, []);

  //Prevent rendering before username has been checked from async storage
  if(loading) return null;

  return (
    //Profile is always available to route to. Signup is conditionally shown when there is no username information
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {usernameExists? (
          <Stack.Screen name="Map" component={MapScreen} />
          ) : (
            <>
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="Map" component={MapScreen} />
            </>
          )}
        <Stack.Screen name="Profile" component={GithubProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
