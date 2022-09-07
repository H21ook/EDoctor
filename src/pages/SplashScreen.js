import React from 'react';

import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import MyButton from '../components/MyButton';
import SizedBox from '../components/SizedBox';
import {backgroudLightColor, backgroudDarkColor, subTextColor, textDarkColor, textLightColor, paddingSize} from '../utils/constant';

export default function SplashScreen(props) {
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const SCREEN_WIDTH = Dimensions.get('window').width;

  const backgroundStyle = {
    backgroundColor: props.darkMode ? backgroudDarkColor : backgroudLightColor,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <View
        style={{
          height: (SCREEN_HEIGHT / 3) * 2,
          width: SCREEN_WIDTH,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            resizeMode: 'cover',
          }}
          source={require('../assets/img/img1.jpg')}
        />
        <Image
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            resizeMode: 'cover',
            position: 'absolute',
            top: 100,
            left: 10,
          }}
          source={require('../assets/img/img5.jpg')}
        />
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            resizeMode: 'cover',
            position: 'absolute',
            top: 70,
            right: 20,
          }}
          source={require('../assets/img/img2.jpg')}
        />
        <Image
          style={{
            width: 130,
            height: 130,
            borderRadius: 65,
            resizeMode: 'cover',
            position: 'absolute',
            bottom: 80,
            right: -30,
          }}
          source={require('../assets/img/img4.jpg')}
        />
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            resizeMode: 'cover',
            position: 'absolute',
            bottom: 50,
            left: -30,
          }}
          source={require('../assets/img/img3.jpg')}
        />
      </View>
      <View style={{flex: 1, paddingHorizontal: paddingSize}}>
        <Text
          style={{
            ...styles.title,
            color: props.darkMode ? textDarkColor : textLightColor,
          }}>
          Эхэлцгээе
        </Text>
        <Text style={styles.subTitle}>Мэргэшсэн эмчтэй зөвлөлдье</Text>
        <SizedBox height={48} />
        <MyButton
          title="Эхлэх"
          onPress={() => {
            console.log("Login page");
            props.navigation.push('Login');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: subTextColor,
    textAlign: 'center',
  },
});
