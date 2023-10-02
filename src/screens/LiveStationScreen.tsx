import * as React from "react";
import { Text, StyleSheet, View, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PNRStatusContainer from "../components/PNRStatusContainer";
import TrainSection from "../components/TrainSection";
import { Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";

const LiveStationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.liveStationScreen}>
      <PNRStatusContainer
        pnrNumber={require("../assets/arrow-21.png")}
        pnrStatus="Live Station"
        topBarRight="-0.14%"
        topBarLeft="0.14%"
      />
      <ScrollView style={{height:"100%",width:"100%",marginTop:80}}>
      <TrainSection
        trainNumber="22188"
        trainTime="02:10 AM"
        trainTimeStatus="02:10 PM"
        trainName="InterCity Express"
        trainDelayStatus="29 mins late"
        trainPlatform="Jabalpur"
        trainPlatformName="Platform 1"
        trainDestination="Shridham"
        trainStatus="DEPARTED"
        onFramePressablePress={() => Alert.alert('Upcoming......')}
      />
        <TrainSection
          trainNumber="22188"
          trainTime="02:10 AM"
          trainTimeStatus="02:10 PM"
          trainName="InterCity Express"
          trainDelayStatus="29 mins late"
          trainPlatform="Jabalpur"
          trainPlatformName="Platform 1"
          trainDestination="Shridham"
          pMTop={550}
          trainStatus="DEPARTED"
          onFramePressablePress={() => Alert.alert('Upcoming......')}
        />
        <TrainSection
          trainNumber="22288"
          trainTime="02:11 AM"
          trainTimeStatus="02:11 PM"
          trainName="InterCity Express1"
          trainDelayStatus="on time"
          trainPlatform="Jabalpur1"
          trainPlatformName="Platform 2"
          trainDestination="Shridham1"
          trainStatus="ARRIVED"
          pMTop={250}
          frame102Color="#33b11e"
          propBackgroundColor="#33b11e"
          onFramePressablePress={() => Alert.alert('Upcoming......')}
        />
        <TrainSection
          trainNumber="22288"
          trainTime="02:11 AM"
          trainTimeStatus="02:11 PM"
          trainName="InterCity Express1"
          trainDelayStatus="on time"
          trainPlatform="Jabalpur1"
          trainPlatformName="Platform 2"
          trainDestination="Shridham1"
          trainStatus="ARRIVED"
          pMTop={400}
          frame102Color="#33b11e"
          propBackgroundColor="#33b11e"
          onFramePressablePress={() => Alert.alert('Upcoming......')}
        />
        <TrainSection
          trainNumber="22288"
          trainTime="02:11 AM"
          trainTimeStatus="02:11 PM"
          trainName="InterCity Express1"
          trainDelayStatus="on time"
          trainPlatform="Jabalpur1"
          trainPlatformName="Platform 2"
          trainDestination="Shridham1"
          trainStatus="ARRIVED"
          pMTop={550}
          frame102Color="#33b11e"
          propBackgroundColor="#33b11e"
          onFramePressablePress={() => Alert.alert('Upcoming......')}
        />
        <TrainSection
          trainNumber="22288"
          trainTime="02:11 AM"
          trainTimeStatus="02:11 PM"
          trainName="InterCity Express1"
          trainDelayStatus="on time"
          trainPlatform="Jabalpur1"
          trainPlatformName="Platform 2"
          trainDestination="Shridham1"
          trainStatus="ARRIVED"
          pMTop={700}
          frame102Color="#33b11e"
          propBackgroundColor="#33b11e"
          onFramePressablePress={() => Alert.alert('Upcoming......')}
        />
        <TrainSection
          trainNumber="22288"
          trainTime="02:11 AM"
          trainTimeStatus="02:11 PM"
          trainName="InterCity Express1"
          trainDelayStatus="on time"
          trainPlatform="Jabalpur1"
          trainPlatformName="Platform 2"
          trainDestination="Shridham1"
          trainStatus="ARRIVED"
          pMTop={850}
          frame102Color="#33b11e"
          propBackgroundColor="#33b11e"
          onFramePressablePress={() => Alert.alert('Upcoming......')}
        />
      </ScrollView>
      <View style={styles.stationParent}>
        <Text style={styles.stationTypo}>Station :</Text>
        <Text style={[styles.jabalpur, styles.stationTypo]}>Jabalpur</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stationTypo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    lineHeight: 28,
    fontSize: FontSize.size_xl,
  },
  jabalpur: {
    marginLeft: 10,
  },
  stationParent: {
    // position: "absolute",
    top: 60,
    left: 15,
    width: 173,
    height: 25,
    flexDirection: "row",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  liveStationScreen: {
    // borderStyle: "solid",
    // borderColor: "#000",
    // borderWidth: 1,
    flex: 1,
    width: "100%",
    height: "100%",
    // overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default LiveStationScreen;
