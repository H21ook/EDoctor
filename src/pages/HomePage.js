import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import MyDoctorListItem from '../components/MyDoctorListItem';
import MyHeader from '../components/MyHeader';
import MyIconButton from '../components/MyIconButton';
import SizedBox from '../components/SizedBox';
import io from 'socket.io-client';

import {
  backgroudDarkColor,
  backgroudLightColor,
  inputHeightSize,
  paddingSize,
  surfaceColor,
} from '../utils/constant';

export default function HomePage(props) {
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const [searchText, setSearchText] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://127.0.0.1:3333`, {
      transports: ['websocket'],
    });
    
    newSocket.on('connect', () => {
      console.log('Socket connected');
      newSocket.on('chat message', r => {
        console.log(r);
      });
    });

    newSocket.on('connect_error', err => {
      console.log(err.message);
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected Socket!');
    });

    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  const DOCTORS = [
    {
      id: 1,
      fullName: 'Г. Хулан',
      profileImgUrl: require('../assets/img/doctor1.jpg'),
      degree: 'Хүний их эмч',
    },
    {
      id: 2,
      fullName: 'У. Урангуа',
      profileImgUrl: require('../assets/img/doctor2.jpg'),
      degree: 'Мэс засалын их эмч',
    },
    {
      id: 3,
      fullName: 'Б. Энхзаяа',
      profileImgUrl: require('../assets/img/doctor3.jpg'),
      degree: 'Хүүхдийн их эмч',
    },
    {
      id: 1,
      fullName: 'Г. Хулан',
      profileImgUrl: require('../assets/img/doctor1.jpg'),
      degree: 'Хүний их эмч',
    },
    {
      id: 2,
      fullName: 'У. Урангуа',
      profileImgUrl: require('../assets/img/doctor2.jpg'),
      degree: 'Мэс засалын их эмч',
    },
    {
      id: 3,
      fullName: 'Б. Энхзаяа',
      profileImgUrl: require('../assets/img/doctor3.jpg'),
      degree: 'Хүүхдийн их эмч',
    },
    {
      id: 1,
      fullName: 'Г. Хулан',
      profileImgUrl: require('../assets/img/doctor1.jpg'),
      degree: 'Хүний их эмч',
    },
    {
      id: 2,
      fullName: 'У. Урангуа',
      profileImgUrl: require('../assets/img/doctor2.jpg'),
      degree: 'Мэс засалын их эмч',
    },
    {
      id: 3,
      fullName: 'Б. Энхзаяа',
      profileImgUrl: require('../assets/img/doctor3.jpg'),
      degree: 'Хүүхдийн их эмч',
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: props.darkMode
          ? backgroudDarkColor
          : backgroudLightColor,
      }}>
      <MyHeader title="Эмчийн жагсаалт"></MyHeader>
      <SizedBox height={paddingSize / 2} />
      <View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: paddingSize,
          }}>
          <TextInput
            style={styles.input}
            onChange={e => {
              setSearchText(e.nativeEvent.text);
            }}
            value={searchText}
            placeholder="Хайх"
          />
          <MyIconButton
            style={{marginLeft: paddingSize / 2}}
            onPress={() => {
              if (searchText) {
                socket.emit('chat message', searchText);
              }
            }}
          />
        </View>
        <SizedBox height={paddingSize / 2} />
        <ScrollView
          style={{
            paddingHorizontal: paddingSize / 2,
            height: SCREEN_HEIGHT - (180 + paddingSize + inputHeightSize),
          }}>
          {DOCTORS.map((doctor, index) => {
            return (
              <MyDoctorListItem
                darkMode={props.darkMode}
                key={`list_item_${index}`}
                doctorData={doctor}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
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
});
