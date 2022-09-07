import React from 'react';
import {StyleSheet, View, useColorScheme, Text} from 'react-native';
import {paddingSize, primaryColor, textDarkColor, textLightColor} from '../utils/constant';

export default function MyHeader(props) {

  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={{...styles.appBarHeader, ...props.style, backgroundColor: props.backgroundColor || primaryColor,}}>
      {props.title ? <Text style={{...styles.title, color: textDarkColor}}>{props.title}</Text> : null}
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  appBarHeader: {
    paddingHorizontal: paddingSize,
    justifyContent: 'center',
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
