import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { Datepicker, Layout, Text, Tab, TabBar, Icon, IconElement, TabView, List } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DecodeString } from '../library/crypto';

const Home = () => {
  const [init, setinit] = React.useState(true);
  const [name, setname] = React.useState("");
  React.useEffect(() => {
    if (init) {
      AsyncStorage.getItem("auth").then((encrypted) => {
        if (encrypted != null) {
          let decrypted = DecodeString(encrypted);
          let userdata = JSON.parse(decrypted);          
          setname(userdata.name);
        }
        setinit(false);
      }).catch((err) => {
        setinit(false);
      })
    }
  })
  return (
    <View>
      <View style={{alignItems:'center', marginTop:50}}>
      <Text category='h3' style={{color:'#6666FFAA'}}>こんにちは</Text>
      <Text category='h2' style={{color:'#2323FFBB'}}>{name}</Text>            
      </View>      
    </View>
  );
};

export default Home;

