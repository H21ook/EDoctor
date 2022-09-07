import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  backgroudDarkColor,
  backgroudLightColor,
  inputHeightSize,
  paddingSize,
  primaryColor,
  surfaceColor,
} from '../utils/constant';
import HomePage from './HomePage';
import MessageListPage from './MessageListPage';
import VideoCallListPage from './VideoCallListPage';

const Tab = createBottomTabNavigator();

export default function HomeScreen(props) {
  const getTabBarItemStyle = focused => {
    return {
      ...styles.tabBarItem,
      backgroundColor: focused ? '#FFF7EC' : 'transparent',
    };
  };

  const getTabBarIconStyle = focused => {
    return {
      ...styles.tabBarIcon,
      tintColor: focused ? '#ED8950' : primaryColor,
    };
  };
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: props.darkMode
            ? backgroudDarkColor
            : backgroudLightColor,
          height: 80,
          borderWidth: 0,
          elevation: 0
        },
        tabBarHideOnKeyboard: true
      }}>
      <Tab.Screen
        name="Message"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View style={getTabBarItemStyle(focused)}>
              <Image
                source={require('../assets/img/messageIcon.png')}
                resizeMode="contain"
                style={getTabBarIconStyle(focused)}
              />
            </View>
          ),
        }}>
        {_props => <MessageListPage {..._props} darkMode={props.darkMode} />}
      </Tab.Screen>
      <Tab.Screen
        name="HomePage"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View style={getTabBarItemStyle(focused)}>
              <Image
                source={require('../assets/img/homeIcon.png')}
                resizeMode="contain"
                style={getTabBarIconStyle(focused)}
              />
            </View>
          ),
        }}>
        {_props => <HomePage {..._props} darkMode={props.darkMode} />}
      </Tab.Screen>
      <Tab.Screen
        name="VideoCall"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View style={getTabBarItemStyle(focused)}>
              <Image
                source={require('../assets/img/videoIcon.png')}
                resizeMode="contain"
                style={getTabBarIconStyle(focused)}
              />
            </View>
          ),
        }}>
        {_props => <VideoCallListPage {..._props} darkMode={props.darkMode} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
  },
  label: {
    marginVertical: paddingSize,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  input: {
    height: inputHeightSize,
    borderRadius: 20,
    backgroundColor: surfaceColor,
    padding: paddingSize / 2,
    fontSize: 20,
    flex: 1,
  },
  tabBarItem: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  tabBarIcon: {
    height: 32,
    width: 32,
  },
});
