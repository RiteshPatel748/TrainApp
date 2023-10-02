import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import PNRDetails from '../components/PNRObject';
import { options, pnrObject } from '../../scretKey';
import { Text } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

const App = () => {
  const [pnrData,setPnrData]=useState([{}]);
  const [status,setStatus]=useState(false);
  const route=useRoute();
  console.log(route.params?.pnr)

  const fetch1=async()=>{
    setStatus(true);
    const url = `https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${route.params?.pnr}`;
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      setPnrData([response]);
    } catch (error) {
      console.error(error);
    }
    setStatus(false);
  }

  useEffect(()=>{
    fetch1();
  },[])

  if(status)
  {
    return(<View style={styles.activityContainer}>
      <ActivityIndicator size="large" />
    </View>)
  }
  if(!pnrData?.data)
  {
    return(<View style={styles.activityContainer}>
      <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center',marginTop:'100%'}}>Not found</Text>
    </View>)
  }

  return (
    <View style={styles.container}>
      {pnrData.map((data, index) => (
        <PNRDetails key={index} Data={data} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
activityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
},
});

export default App;
