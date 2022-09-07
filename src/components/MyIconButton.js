import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {inputHeightSize, primaryColor} from '../utils/constant';

export default function MyIconButton(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{...styles.button, ...props.style}}
      onPress={props.onPress}></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: inputHeightSize,
    width: inputHeightSize,
    padding: 12,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: primaryColor,
  },
});
