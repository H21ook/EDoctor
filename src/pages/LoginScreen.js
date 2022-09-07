import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import SizedBox from '../components/SizedBox';
import {
  backgroudDarkColor,
  backgroudLightColor,
  inputHeightSize,
  paddingSize,
  primaryColor,
  surfaceColor,
  textDarkColor,
  textLightColor,
} from '../utils/constant';
import MyButton from '../components/MyButton';

export default function LoginScreen(props) {
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [keyboardShow, setKeyboardShow] = useState(false);
  const [mobilePhone, setMobilePhone] = useState('');

  let keyboardCloseListener;
  let keyboardOpenListener;

  const _keyboardDidHide = () => {
    Keyboard.dismiss();
    setKeyboardShow(false);
  };

  const _keyboardDidShow = () => {
    setKeyboardShow(true);
  };

  useEffect(() => {
    keyboardCloseListener = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );
    keyboardOpenListener = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow,
    );
    return () => {
      keyboardCloseListener.remove();
      keyboardOpenListener.remove();
    };
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: primaryColor}}>
      <View style={{...styles.imageContainer, height: SCREEN_HEIGHT / 2.5}}>
        <View
          style={{
            ...styles.avatar,
            width: 180,
            height: 180,
            borderRadius: 100,
            backgroundColor: props.darkMode
              ? backgroudDarkColor
              : backgroudLightColor,
          }}></View>
        {keyboardShow ? <SizedBox height={160} /> : null}
        {/* <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            resizeMode: 'cover',
          }}
          source={require('../assets/img/img4.jpg')}
        /> */}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Мэргэжлийн эмч нарын зөвлөгөө, үйлчилгээ
        </Text>
        <SizedBox height={paddingSize} />
        <Text style={styles.subTitle}>
          {`Таны эрүүл мэндийн төлөө бид\n үйлчлэхдээ баяртай байх болно.`}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: props.darkMode
            ? backgroudDarkColor
            : backgroudLightColor,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          width: SCREEN_WIDTH,
          height: 300,
          position: 'absolute',
          bottom: 0,
        }}>
        <View style={styles.bottomSheetHeader}>
          <Text
            style={{
              ...styles.label,
              color: props.darkMode ? textDarkColor : textLightColor,
            }}>
            E-Doctor апп-д тавтай морилно уу!
          </Text>
          <View style={styles.inputContainer} onClick>
            <Image
              source={require('../assets/img/mgl.jpg')}
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                marginRight: 12,
              }}
            />
            <Text
              style={{
                ...styles.prefix,
                color: props.darkMode ? textDarkColor : textLightColor,
              }}>
              +976
            </Text>
            <TextInput
              style={styles.input}
              onChange={e => {
                setMobilePhone(e.nativeEvent.text);
              }}
              value={mobilePhone}
              keyboardType = 'numeric'
              placeholder="Утасны дугаар"
            />
          </View>
        </View>
        <View>
          <View style={{padding: paddingSize}}>
            <MyButton
              title="Нэвтрэх"
              onPress={() => {
                props.navigation.push('LoginConfirm');
              }}
            />
          </View>
        </View>
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
  avatar: {
    opacity: 0.5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: textDarkColor,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 24,
    color: textDarkColor,
  },

  textContainer: {
    paddingHorizontal: paddingSize,
  },

  bottomSheetHeader: {
    paddingHorizontal: paddingSize,
  },
  label: {
    marginVertical: paddingSize,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  inputContainer: {
    height: inputHeightSize,
    borderRadius: 20,
    backgroundColor: surfaceColor,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  prefix: {
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    height: inputHeightSize,
    borderRadius: 20,
    fontSize: 20,
    width: '100%',
    padding: paddingSize / 2,
  },
});
