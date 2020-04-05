/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ActionButton = props => {
  const {title, desc} = props;
  return (
    <View
      style={{
        marginBottom: 43,
        maxWidth: 225,
      }}>
      <Text
        style={{
          fontSize: 10,
          color: '#7e7e7e',
          textAlign: 'center',
          paddingHorizontal: '15%',
          marginBottom: 6,
        }}>
        {desc}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#45AAF2',
          borderRadius: 25,
          paddingVertical: 13,
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const WelcomeAuth = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          width: 219,
          height: 117,
          backgroundColor: '#45AAF2',
          marginBottom: 10,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#45AAF2',
          marginBottom: 76,
        }}>
        Selamat Datang di OJOL
      </Text>
      <ActionButton
        title="Masuk"
        desc="Silahkan masuk, Jika anda sudah memiliki akun"
      />
      <ActionButton
        title="Register"
        desc="Silahkan daftar Jika anda belum memiliki akun"
      />
    </View>
  );
};

export default WelcomeAuth;
