import React from 'react';

import {SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/pages/SplashScreen';
import LoginScreen from './src/pages/LoginScreen';
import LoginConfirmScreen from './src/pages/LoginConfirmScreen';
import HomeScreen from './src/pages/HomeScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" options={{headerShown: false}}>
            {props => <SplashScreen {...props} darkMode={isDarkMode} />}
          </Stack.Screen>
          <Stack.Screen name="Login" options={{headerShown: false}}>
            {props => <LoginScreen {...props} darkMode={isDarkMode} />}
          </Stack.Screen>
          <Stack.Screen name="LoginConfirm" options={{headerShown: false}}>
            {props => <LoginConfirmScreen {...props} darkMode={isDarkMode} />}
          </Stack.Screen>
          <Stack.Screen name="Home" options={{headerShown: false}}>
            {props => <HomeScreen {...props} darkMode={isDarkMode} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      {/* <SplashScreen darkMode={isDarkMode} /> */}
    </SafeAreaView>
  );
};

export default App;
