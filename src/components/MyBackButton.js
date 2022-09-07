import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {backButtonSize, surfaceColor} from '../utils/constant';

export default function MyBackButton(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={props.onPress}>
      {/* <Text style={styles.text}>{props.title}</Text> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    borderRadius: 5,
    opacity: 0.5,
    backgroundColor: surfaceColor,
    height: backButtonSize,
    width: backButtonSize
  }
});
