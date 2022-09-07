import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  backgroudDarkColor,
  backgroudLightColor,
  paddingSize,
  primaryColor,
  subTextColor,
  textDarkColor,
  textLightColor,
} from '../utils/constant';
import SizedBox from './SizedBox';

export default function MyChatChannel(props) {
  const {channelData, darkMode} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        console.log(channelData);
      }}
      style={{
        ...styles.card,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View style={styles.channelInfo}>
          <Image source={channelData.profileImgUrl} style={styles.avatar} />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                ...styles.name,
                color: darkMode ? textDarkColor : textLightColor,
              }}>
              {channelData.fullName}
            </Text>
            <Text style={styles.message}>
              {channelData.lastChat.length > 20
                ? `${channelData.lastChat.substring(0, 20)}...`
                : channelData.lastChat}
            </Text>
          </View>
        </View>
        <View style={styles.lastChatInfo}>
          <Text style={styles.time}>{channelData.lastChatTime}</Text>
          <SizedBox height={paddingSize / 4} />
          {channelData.unreadCount ? (
            <View style={styles.badge}>
              <Text style={styles.badgeCount}>{channelData.unreadCount}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: paddingSize / 4,
    marginHorizontal: paddingSize / 2,
  },
  avatar: {
    height: 64,
    width: 64,
    borderRadius: 22,
    marginRight: paddingSize / 2,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: subTextColor,
  },
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryColor,
    height: 26,
    width: 26,
    borderRadius: 13,
  },
  badgeCount: {
    color: textDarkColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  channelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  message: {
    color: subTextColor
  },
  lastChatInfo: {
    flexDirection: 'column',
    width: 100,
    paddingVertical: paddingSize / 4,
    paddingHorizontal: paddingSize / 4,
    alignItems: 'flex-end',
  },
});
