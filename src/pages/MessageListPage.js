import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import MyChatChannel from '../components/MyChatChannel';
import MyHeader from '../components/MyHeader';
import {
  backgroudDarkColor,
  backgroudLightColor,
  paddingSize,
} from '../utils/constant';

export default function MessageListPage(props) {
  const SCREEN_HEIGHT = Dimensions.get('window').height;

  const DOCTORS = [
    {
      id: 1,
      fullName: 'Г. Хулан',
      profileImgUrl: require('../assets/img/doctor1.jpg'),
      lastChat: 'Сайн байна уу?',
      lastChatTime: '12:26',
      unreadCount: 3 
    },
    {
      id: 2,
      fullName: 'У. Урангуа',
      profileImgUrl: require('../assets/img/doctor2.jpg'),
      lastChat: 'Биеийн халуун буурсан байна',
      lastChatTime: '09:51',
      unreadCount: 1 
    },
    {
      id: 3,
      fullName: 'Б. Энхзаяа',
      profileImgUrl: require('../assets/img/doctor3.jpg'),
      lastChat: 'Зүгээр байнаөө',
      lastChatTime: '1 өдрийн өмнө',
      unreadCount: 0 
    },
    {
      id: 1,
      fullName: 'Г. Хулан',
      profileImgUrl: require('../assets/img/doctor1.jpg'),
      lastChat: 'Хаанаас асуух вэ?',
      lastChatTime: '7 өдрийн өмнө',
      unreadCount: 0 
    },
    {
      id: 2,
      fullName: 'У. Урангуа',
      profileImgUrl: require('../assets/img/doctor2.jpg'),
      lastChat: 'Баярлалаа',
      lastChatTime: '1 сарын өмнө',
      unreadCount: 0 
    }
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: props.darkMode
          ? backgroudDarkColor
          : backgroudLightColor,
      }}>
      <MyHeader title="Мессеж"></MyHeader>
      <ScrollView
        style={{
          paddingHorizontal: paddingSize / 2,
          height: SCREEN_HEIGHT - 180,
        }}>
        {DOCTORS.map((doctor, index) => {
          return (
            <MyChatChannel
              darkMode={props.darkMode}
              key={`list_item_${index}`}
              channelData={doctor}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
