import * as React from "react";
import { StyleSheet, View, Image, Text,ScrollView, Alert, ActivityIndicator } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";
import TrainLiveInfo from "../components/TrainLiveInfo";
import { options } from "../../scretKey";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";


const CurrentTrip = () => {
  const [livetrain,setData]=useState({})
  const [length,setLength]=useState(0)
  const route =useRoute();
  const getData =async()=>{
  const url = `https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=${route?.params?.trainNo}&startDay=1`;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    setData(result)
    setLength(result?.data?.previous_stations?.length)
    console.log(result);
  } catch (error) {
    Alert.alert(`Failed to sign up: ${error}`);
  }
}

useEffect(()=>{
  getData()
},[])

if(!livetrain?.data){
  return(
    <ActivityIndicator
  // color = '#eb9413'
  size = "large"
  style = {{flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80}}/>
  )
}
  console.log(route?.param?.trainNo)
  return (
    <View style={styles.currentTrip}>
      <View style={styles.topbar}>
        <View style={[styles.vectorParent, styles.vectorFlexBox]}>
          <Image
            style={styles.instanceChild}
            resizeMode="cover"
            source={require("../assets/arrow-2.png")}
          />
          <Text style={styles.history}>Train Status</Text>
        </View>
      </View>
      {(livetrain?.data?.previous_stations ||livetrain?.data?.upcoming_stations)?<ScrollView style={styles.currentTripChild} >
      {livetrain?.data?.previous_stations?.map((data)=>{
        return(
          (data && <TrainLiveInfo 
            stationName={data.station_name}
            arrivedTime={data.sta}
            departedTime={data.etd}
      />)
      )})}
      {livetrain?.data?.current_station_name&&<TrainLiveInfo 
        stationName={livetrain?.data?.current_station_name}
        arrivedTime={livetrain?.data?.cur_stn_sta}
        departedTime={livetrain?.data?.etd}
      />}
      {livetrain?.data?.upcoming_stations?.map((data)=>{
        return(
          (data && <TrainLiveInfo 
            stationName={data.station_name}
            arrivedTime={data.sta}
            departedTime={data.etd}
      />)
      )})}
      <View style={styles.currentTripItem} />
      <Image
      
        style={[styles.vectorIcon,{top: (!length?(0):(length*85))}]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      </ScrollView>:<Text style={{fontSize:22,fontWeight:'bold',textAlign:'center',marginTop:'100%',margin:20}}>{livetrain.data.new_message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  vectorFlexBox: {
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  currentInnerPosition: {
    left: "8.06%",
    right: "8.33%",
    width: "83.61%",
    height: "3.91%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  jabalpurTypo: {
    marginLeft: 15,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  amTypo: {
    textAlign: "right",
    marginLeft: 15,
    lineHeight: 14,
    letterSpacing: 0.8,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  currentTripChild: {
    flex:1,
    // height: "65.62%",
    // width: "94.44%",
    top: "7.19%",
    right: "2.78%",
    bottom: "3.19%",
    left: "2.78%",
    backgroundColor: "#bccef0",
    borderRadius: Border.br_xs,
    position: "absolute",
    paddingTop:40,
    paddingBottom:40,
    // Bottom:100
  },
  instanceChild: {
    width: 23,
    height: 22,
  },
  history: {
    fontSize: FontSize.size_xl,
    letterSpacing: 1.6,
    lineHeight: 27,
    textAlign: "center",
    marginLeft: 24,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  vectorParent: {
    width: 360,
    height: 40,
    paddingHorizontal: Padding.p_smi,
    alignItems: "center",
  },
  topbar: {
    top: 0,
    right: "0%",
    left: "0%",
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  frameChild: {
    width: 7,
    height: 7,
  },
  jabalpur: {
    lineHeight: 14,
    letterSpacing: 0.8,
    fontSize: FontSize.size_3xs,
    marginLeft: 15,
    textAlign: "left",
  },
  am: {
    flex: 1,
  },
  am1: {
    display: "flex",
    width: 44,
    alignItems: "center",
  },
  vectorGroup: {
    height: 20,
    paddingHorizontal: Padding.p_lg,
    alignItems: "center",
    borderRadius: Border.br_xs,
    flex: 1,
  },
  currentTripInner: {
    top: "12.34%",
    bottom: "83.75%",
  },
  frameView: {
    top: "20.78%",
    bottom: "75.31%",
  },
  jabalpur2: {
    fontSize: FontSize.size_5xs,
    letterSpacing: 0.6,
    lineHeight: 11,
  },
  currentTripInner1: {
    top: "29.22%",
    bottom: "66.88%",
  },
  currentTripInner2: {
    top: "37.5%",
    bottom: "58.59%",
  },
  currentTripInner3: {
    top: "45.78%",
    bottom: "50.31%",
  },
  currentTripInner4: {
    top: "54.06%",
    bottom: "42.03%",
  },
  currentTripInner5: {
    top: "62.5%",
    bottom: "33.59%",
  },
  currentTripItem: {
    // flex:1,
    // height: "57.81%",
    // width: "1.39%",
    top: "0%",
    right: "91.50%",
    bottom: "0%",
    left: "7.50%",
    borderRadius: 18,
    backgroundColor: "#393939",
    position: "absolute",
    marginBottom:35
  },
  vectorIcon: {
    height: 30,
    width: 40,
    // top: (length*85),//85
    // right: "82%",
    // bottom: "84.53%",
    left: "2.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    // overflow: "hidden",
    flex:1,
    marginBottom:85
  },
  currentTrip: {
    // height: 640,
    // overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    flex: 1,
  },
});

export default CurrentTrip;
