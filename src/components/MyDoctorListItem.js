import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  paddingSize,
  subTextColor,
  surfaceColor,
  textDarkColor,
  textLightColor,
} from '../utils/constant';

export default function MyDoctorListItem(props) {
  
  const {doctorData, darkMode} = props;
  
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        console.log(doctorData);
      }}
      style={{
        ...styles.card,
        backgroundColor: surfaceColor,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={doctorData.profileImgUrl}
          style={styles.avatar}
        />
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              ...styles.name,
              color: darkMode ? textDarkColor : textLightColor,
            }}>
            {doctorData.fullName}
          </Text>
          <Text style={styles.degree}>{doctorData.degree}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: paddingSize / 4,
    marginHorizontal: paddingSize / 2,
    padding: paddingSize / 2,
    borderRadius: 24,
    // elevation: 1
  },
  avatar: {
    height: 72,
    width: 72,
    borderRadius: 22,
    marginRight: paddingSize / 2,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  degree: {
    color: subTextColor,
    fontSize: 16,
    fontWeight: '500',
  },
});
