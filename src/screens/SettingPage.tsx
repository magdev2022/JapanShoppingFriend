import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { Datepicker, Layout, Text, Tab, TabBar, Icon, IconElement, TabView, List, Button } from '@ui-kitten/components';
import { Dirs, FileSystem } from 'react-native-file-access';

const SettingPage = () => {
  const [init, setinit] = React.useState(true);
  const [logsize, setLogSize] = React.useState(0);
  React.useEffect(() => {
    if (init) {
      const logFilePath = Dirs.DocumentDir + "/" + "log.txt";
      FileSystem.stat(logFilePath).then((stat) => {
        setLogSize(Math.floor(stat.size / 1000));
      }).catch((err) => {
        setLogSize(0);
      })
      setinit(false);
    }
  })
  const handleRemoveLog = async () => {
    const logFilePath = Dirs.DocumentDir + "/" + "log.txt";
    await FileSystem.unlink(logFilePath);
    setLogSize(0);
  }
  return (
    <Layout>
      <Layout style={{ flexDirection: 'row', margin:20 }}>
        <Text style={{verticalAlign:'middle'}}>
          Log File Size:
        </Text>
        <Text style={{marginLeft:5,verticalAlign:'middle'}}>
          {logsize}KB
        </Text>
        <Button status='danger' style={{justifyContent:'flex-end', marginLeft:'auto'}} onPress={handleRemoveLog} size='small'>消す</Button>
      </Layout>      
    </Layout>
  );
};
export default SettingPage;

