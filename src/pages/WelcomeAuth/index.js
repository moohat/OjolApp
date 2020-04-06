/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import ActionButton from './ActionButton';

//import colors from utils
import {colors} from '../../utils';
//import images from assets
import {welcomeAuth} from '../../assets';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper.page}>
      <Image source={welcomeAuth} style={styles.wrapper.illustration} />
      <Text style={styles.textWelcome}>Selamat Datang di OJOL</Text>
      <ActionButton
        title="Masuk"
        desc="Silahkan masuk, Jika anda sudah memiliki akun"
        onPress={() => handleGoTo('Login')}

      />
      <ActionButton
        title="Register"
        desc="Silahkan daftar Jika anda belum memiliki akun"
        onPress={() => handleGoTo('Register')}
      />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      flex: 1,
    },
    illustration: {
      width: 219,
      height: 117,
      backgroundColor: colors.default,
      marginBottom: 10,
    },
  },
  textWelcome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.default,
    marginBottom: 76,
  },
};

export default WelcomeAuth;
