import React from 'react'
import { View } from 'react-native'
import MyHeader from '../components/MyHeader'
import { backgroudDarkColor, backgroudLightColor } from '../utils/constant'

export default function VideoCallListPage(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: props.darkMode
          ? backgroudDarkColor
          : backgroudLightColor,
      }}>
      <MyHeader title="Видео дуудлага"></MyHeader>
    </View>
  )
}
