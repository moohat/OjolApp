/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../utils';
import {Button} from '../../components';

const ActionButton = props => {
  const {title, desc, onPress} = props;
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.wrapper.text.desc}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = {
  wrapper: {
    component: {
      marginBottom: 43,
      maxWidth: 225,
    },
    text: {
      desc: {
        fontSize: 10,
        color: colors.text.default,
        textAlign: 'center',
        paddingHorizontal: '15%',
        marginBottom: 6,
      },
    },
  },
};

export default ActionButton;
