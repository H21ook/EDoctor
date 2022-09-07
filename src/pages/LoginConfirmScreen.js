import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import MyBackButton from '../components/MyBackButton';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import SizedBox from '../components/SizedBox';
import {
  backgroudDarkColor,
  backgroudLightColor,
  paddingSize,
  primaryColor,
  subTextColor,
  surfaceColor,
  textDarkColor,
  textLightColor,
} from '../utils/constant';

export default function LoginConfirmScreen(props) {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: props.darkMode
          ? backgroudDarkColor
          : backgroudLightColor,
      }}>
      <MyHeader backgroundColor={props.darkMode
          ? backgroudDarkColor
          : backgroudLightColor}>
        <MyBackButton
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </MyHeader>
      <SizedBox height={paddingSize} />
      <View>
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/img/verify_icon.png')}
            style={styles.icon}
          />
        </View>
        <SizedBox height={paddingSize} />
        <Text
          style={{
            ...styles.title,
            color: props.darkMode ? textDarkColor : textLightColor,
          }}>
          Баталгаажуулах
        </Text>
        <Text style={styles.subTitle}>
          Таны 99889988 дугаарт илгээсэн нэг удаагийн баталгаажуулах кодыг
          оруулна уу!
        </Text>
      </View>
      <SizedBox height={paddingSize} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.oneNumberInput} maxLength={1} keyboardType = 'numeric'/>
        <TextInput style={styles.oneNumberInput} maxLength={1} keyboardType = 'numeric'/>
        <TextInput style={styles.oneNumberInput} maxLength={1} keyboardType = 'numeric'/>
        <TextInput style={styles.oneNumberInput} maxLength={1} keyboardType = 'numeric'/>
      </View>
      <View style={{width: SCREEN_WIDTH, padding: paddingSize}}>
        <MyButton
          title="Үргэлжлүүлэх"
          onPress={() => {
            console.log('check otp code');
            props.navigation.navigate("Home");
          }}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            console.log('code resend');
          }}>
          <Text style={styles.link}>Код ирээгүй. Дахин илгээх</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 140,
    width: 140,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: subTextColor,
    textAlign: 'center',
  },
  link: {
    color: primaryColor,
    padding: paddingSize / 2,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 56,
  },
  oneNumberInput: {
    width: 40,
    height: 56,
    marginHorizontal: paddingSize / 3,
    borderRadius: 8,
    backgroundColor: surfaceColor,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
