import * as React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Pressable,
  Text,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import PNRStatusContainer from "../components/PNRStatusContainer";
import TrainInfo from "../components/TrainInfo";
import { FontFamily, Padding, Color, Border, FontSize } from "../../GlobalStyles";
import { trains } from "./object";
import TrainDetails from "../components/TrainDetails";
import { useEffect, useState } from "react";
import { options } from "../../scretKey";
import TrainByNo from "../components/TrainByNo";
const TrainsScreen = () => {
  const navigation = useNavigation();
  const [data,setData]=useState(undefined)
  const route =useRoute();
  const [check,setCheck]=useState(false);
  const fatch1 =async()=>{
    await fetch(`https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations?fromStationCode=${route.params?.fromStation}&toStationCode=${route.params?.toStation}`, options)
  .then(async response => setData(await response.json()))
  .then(response => {console.log(response);setCheck(true)})
  .catch(error => {Alert.alert(`Failed to sign up: ${error?.message}`);setCheck(true)});
}
const fatch2 =async()=>{
    await fetch(`https://irctc1.p.rapidapi.com/api/v1/searchTrain?query=${route?.params?.trainNumber}`, options)
  .then(async response => setData(await response.json()))
  .then(response => {console.log(response);setCheck(true)})
  .catch(error => {Alert.alert(`Failed to sign up: ${error?.message}`);setCheck(true)});
  }
  useEffect(()=>{
    if(!route?.params?.trainNumber)
    fatch1()
    else
    fatch2()
  },[])

  if(!check){
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
  return (
    <View style={[styles.searchTrainScreen, styles.frameInnerFlexBox]}>
      <PNRStatusContainer
        pnrNumber={require("../assets/arrow-21.png")}
        pnrStatus="Search Train"
        topBarRight="-0.14%"
        topBarLeft="0.14%"
      />
        {(!data?.data)&&<Text style={{fontSize:30,fontWeight:'bold',textAlign:'center',marginTop:'100%'}}>Not found</Text>}
        {!route?.params?.trainNumber?
          (<ScrollView style={{marginTop:60}}>
          {data?.data?.map((data: { train_number: string | undefined; from_sta: string | undefined; to_sta: string | undefined; train_name: string | undefined; run_days: any; })=>{return(
                    <TrainDetails
                    trainNumber={data.train_number}
                    trainTime={data.from_sta}
                    trainTimeStatus={data.to_sta}
                    trainName={data.train_name}
                    run_days={data.run_days}
                  />
            )})}
        </ScrollView>):(
        <ScrollView style={{marginTop:60}}>
        {data?.data?.map((data: { train_number: string | undefined; train_name: string | undefined; })=>{return(
                  <TrainByNo
                  trainNumber={data?.train_number}
                  trainName={data?.train_name}
                />
          )})}
      </ScrollView>)
        }
    </View>
  );
};

const styles = StyleSheet.create({
  frameInnerFlexBox: {
    overflow: "hidden",
    flex: 1,
  },
  parentShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  findTrainsFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  vectorParentSpaceBlock: {
    marginTop: 5,
    paddingVertical: 0,
    flexDirection: "row",
  },
  frameItemLayout: {
    width: 22,
    height: 26,
  },
  trainNameTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  frameChild: {
    width: 10,
    height: 10,
  },
  madanMahalStation: {
    marginLeft: 10,
  },
  ellipseParent: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    height: 40,
    backgroundColor: Color.darkslategray_100,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: Border.br_3xs,
  },
  frameItem: {
    height: 26,
  },
  frameInner: {
    maxWidth: "100%",
    height: 26,
  },
  arrowIcon: {
    marginLeft: 17,
    height: 26,
  },
  vectorGroup: {
    width: 30,
    flexDirection: "row",
  },
  vectorParent: {
    height: 24,
    paddingHorizontal: Padding.p_mini,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  ellipseGroup: {
    paddingHorizontal: Padding.p_3xs,
    height: 40,
    marginTop: 5,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkslategray_100,
    alignSelf: "stretch",
  },
  findTrains: {
    fontSize: FontSize.size_xl,
    letterSpacing: 1.6,
    lineHeight: 27,
    color: Color.white,
    display: "flex",
    justifyContent: "center",
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
  },
  findTrainsWrapper: {
    backgroundColor: Color.seagreen,
    width: 290,
    paddingHorizontal: Padding.p_3xs,
    height: 40,
    marginTop: 5,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  triphistory: {
    top: 68,
    backgroundColor: Color.lightgray,
    paddingBottom: Padding.p_8xs,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "5.28%",
    right: "4.44%",
    width: "90.28%",
    position: "absolute",
  },
  trainName: {
    fontSize: FontSize.size_xs,
    letterSpacing: 1,
    lineHeight: 16,
    color: Color.black,
  },
  trainNameParent: {
    borderWidth: 0.5,
    padding: Padding.p_3xs,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flex: 1,
    justifyContent: "space-between",
    borderColor: "#000",
    borderStyle: "solid",
  },
  componentParent: {
    flex:1,
    width:"95%",
    // height: "62.25%",
    top: "6%",
    bottom:10,
    borderWidth: 2,
    left: 10,
    // right: "4.44%",
    // width: "90.28%",
    // position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
    overflow: "hidden",
    marginBottom:20,
  },
  searchTrainScreen: {
    flex:1,
    // flexDirection:"row",
    width: "100%",
    height:"100%",
    // borderWidth: 1,
    // borderColor: "#000",
    // borderStyle: "solid",
    backgroundColor: Color.white,
    // overflow: "hidden",
  },
});

export default TrainsScreen;
