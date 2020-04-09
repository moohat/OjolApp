/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors} from '../../utils';
import {Input, Button} from '../../components';
import {Value} from 'react-native-reanimated';
import {IconBack, IllustrationRegister} from '../../assets';

const Register = () => {
  return (
    <View style={styles.wrapper}>
      <IconBack width={25} height={25} />
      <IllustrationRegister width={106} height={115} style={styles.marginTop} />

      <Text style={styles.text}>
        Mohon mengisi beberapa data untuk proses daftar anda
      </Text>

      <View style={styles.space(64)} />
      <Input placeholder="Nama Lengkap" />
      <View style={styles.space(33)} />
      <Input placeholder="Email" />
      <View style={styles.space(33)} />

      <Input placeholder="Password" />

      {/* <Button title="Daftar" /> */}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  illustration: {
    marginTop: 8,
  },
  wrapper: {
    padding: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.default,
    marginTop: 16,
    maxWidth: 200,
  },
  space: value => {
    return {
      height: value,
    };
  },
});
