import React,{useEffect, useState} from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PNRStatusContainer from "../components/PNRStatusContainer";
import { FontFamily, Padding, Color, Border, FontSize } from "../../GlobalStyles";
import { station_name } from "./object";
import SearchableDropdown from 'react-native-searchable-dropdown';

const SearchTrainScreen = () => {
  const [fromStation,setFromStation]=useState("From Station")
  const [fromStationCode,setFromStationCode]=useState("")
  const [toStation,setToStation]=useState("To Station")
  const [toStationCode,setToStationCode]=useState("")
  const [trainNumber,setTrainNumber]=useState("")
  const navigation = useNavigation();

  const onPress=()=>{
    if(fromStation=="From Station"){return(Alert.alert(`From Station is empty`))}
    if(toStation=="To Station"){return(Alert.alert(`to Station is empty`))}
    navigation.navigate("TrainsScreen" ,{fromStation:fromStationCode.toLowerCase(),toStation:toStationCode.toLowerCase()})
  }
  const onPressNumber=()=>{
    if(!trainNumber){return(Alert.alert(`Train number is empty`))}
    navigation.navigate("TrainsScreen" ,{trainNumber:Number(trainNumber)})
  }

  const Arrow =()=>{
    var text=fromStation;
    var text2=toStationCode;
    if(text!="From Station"){
      setFromStation(toStation)
      setToStation(text)
      setToStationCode(fromStationCode)
      setFromStationCode(text2)
    }
  }

  const [object ,setObject]=useState([])
  const call=()=>{
            var array=[]
            for(let i=0;i< station_name.features.length;i++)
            {
                array.push(station_name.features[i].properties)
            }
            setObject([...array])
    }

  useEffect(() => {
    call()
  }, []);

  return (
    <View style={[styles.searchTrainScreen, styles.frameInnerFlexBox]}>
      <PNRStatusContainer
        pnrNumber={require("../assets/arrow-21.png")}
        pnrStatus="Search Train"
        topBarRight="-0.14%"
        topBarLeft="0.14%"
      />
      <View style={[styles.triphistory, styles.parentShadowBox]}>
        <View style={[styles.ellipseParent,{ zIndex: 20,elevation: 3}]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-16.png")}
          />
         <SearchableDropdown
          onTextChange={(text:any) => console.log(text)}
          onItemSelect={(item:any) =>{setFromStation(item.name);setFromStationCode(item.code)}}
          containerStyle={styles.madanMahalStation}
          textInputStyle={[styles.findTrainsFlexBox]}
          itemStyle={{
            padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
          }}
          itemTextStyle={{
            color:'#000',
          }}
          itemsContainerStyle={{
            maxHeight: '40%',
            height:400,
            color:'#fff',
            position: "absolute",
            top:40,
            width:'95%',
          }}
          items={object}
          placeholder={fromStation}
          placeholderTextColor='#fff'
          resPtValue={false}
        />
        </View>
        <View style={[styles.vectorParent, styles.vectorParentSpaceBlock]}>
          <Image
            style={[styles.frameItem, styles.frameItemLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-3.png")}
          />
          <TouchableOpacity style={styles.vectorGroup} onPress={Arrow}>
            <Image
              style={[styles.frameInner, styles.frameInnerFlexBox]}
              resizeMode="cover"
              source={require("../assets/arrow-4.png")}
            />
            <Image
              style={[styles.arrowIcon, styles.frameItemLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-3.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.ellipseGroup, styles.vectorParentSpaceBlock,{ zIndex: 19,elevation: 2}]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-161.png")}
          />
           <SearchableDropdown
          onTextChange={(text:any) => console.log(text)}
          onItemSelect={(item:any) =>{setToStation(item.name);setToStationCode(item.code)}}
          containerStyle={styles.madanMahalStation}
          textInputStyle={[styles.findTrainsFlexBox]}
          itemStyle={{
            padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
          }}
          itemTextStyle={{
            color:'#000',
          }}
          itemsContainerStyle={{
            maxHeight: '40%',
            height:400,
            color:'#fff',
            position: "absolute",
            top:40,
            width:'95%',
          }}
          items={object}
          placeholder={toStation}
          placeholderTextColor='#fff'
          resPtValue={false}
        />
        </View>
        <TouchableOpacity onPress={onPress}
          style={[styles.findTrainsWrapper, styles.vectorParentSpaceBlock]}
        >
          <Text style={[styles.findTrains, styles.trainNameTypo]}>
            Find Trains
          </Text>
        </TouchableOpacity>
      </View>      
      <View style={[styles.triphistory, styles.parentShadowBox,{marginTop:100,height:120}]}>
         <Text style={[styles.findTrains,{color:'#000',zIndex: 22,flex:1,left:10}]}>
            Find Train by number
          </Text>
        <View style={[styles.ellipseParent,{ zIndex: 20,}]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-16.png")}
          />
          <TextInput
            style={[styles.madanMahalStation, styles.findTrainsFlexBox]}
            value={trainNumber}
            placeholder="Train Number"
            keyboardType="default"
            placeholderTextColor="#fff"
            onChangeText={setTrainNumber}
          />
        </View>
        <TouchableOpacity onPress={onPressNumber}
          style={[styles.findTrainsWrapper, styles.vectorParentSpaceBlock]}
        >
          <Text style={[styles.findTrains, styles.trainNameTypo]}>
            Find Train
          </Text>
        </TouchableOpacity>
      </View>      
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
    color:'#fff'
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
    textAlignVertical:'center',
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
    width:'100%',
    // zIndex: 2,
    // elevation: 3,
    // height:100
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
    // zIndex: 1
  },
  frameItem: {
    height: 26,
  },
  frameInner: {
    maxWidth: "100%",
    height: 26,
  },
  arrowIcon: {
    marginLeft: 0,
    height: 26,
  },
  vectorGroup: {
    width: 45,
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
    // position: "absolute",
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
    // height: "65.25%",
    top: "30%",
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
    // overflow: "hidden",
    marginBottom:20,
  },
  searchTrainScreen: {
    flex:1,
    width: "100%",
    height:"100%",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
    // overflow: "hidden",
  },
});

export default SearchTrainScreen;
