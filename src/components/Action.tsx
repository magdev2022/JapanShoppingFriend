/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

type PropsAction = {
  setMode: (value: string) => void;
  valueSetMode: string;
  title: string;
  ask: string;
};


const Action = ({setMode, valueSetMode, title, ask}: PropsAction) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#fff', fontSize: 14, textAlign: 'center'}}>
        {ask}{' '}
      </Text>
      <TouchableOpacity onPress={() => setMode(valueSetMode)}>
        <Text style={{color: '#FFD93D', fontSize: 14, textAlign: 'center'}}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Action;
