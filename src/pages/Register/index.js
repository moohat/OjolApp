/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors} from '../../utils';
import {Input, Button} from '../../components';
import {Value} from 'react-native-reanimated';
import {IconBack, IllustrationRegister} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import { setForm } from '../../redux';

const Register = () => {
  //useSelector to connect to state in redux using in functional componen
  const {form} = useSelector(state => state.registerReducer);
  const dispatch = useDispatch();
  // const [form, setForm] = useState({
  //   fullName: '',
  //   email: '',
  //   password: '',
  // });


  const sendData = () => {
    console.log('data yang dikirim: ', form);
  };
  const onInputChange = (value, inputType) => {
    // setForm({
    //   ...form,
    //   [input]: value,
    // });
    dispatch(setForm(inputType, value));
  };
  return (
    <View style={styles.wrapper}>
      {/* using ScrollView to scroll page and set is false to hide scroll bar  */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <IconBack width={25} height={25} />
        <IllustrationRegister
          width={106}
          height={115}
          style={styles.illustration}
        />

        <Text style={styles.text}>
          Mohon mengisi beberapa data untuk proses daftar anda
        </Text>

        <View style={styles.space(64)} />
        <Input
          placeholder="Nama Lengkap"
          value={form.fullName}
          onChangeText={value => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Email"
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={styles.space(33)} />

        <Input
          placeholder="Password"
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(83)} />

        <Button title="Daftar" onPress={sendData} />
      </ScrollView>
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
