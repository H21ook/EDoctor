import React from 'react';
import { View } from 'react-native';

export default function SizedBox(props) {
  return <View style={{width: props.width || '100%', height: props.height || '100%'}}></View>;
}
