import React, { useMemo } from "react";
import { Text, StyleSheet, View,Pressable } from "react-native";
import { FontFamily,Color, Border, Padding } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

type TrainSectionType = {
  trainNumber?: string;
  trainTime?: string;
  trainTimeStatus?: string;
  trainName?: string;
  run_days?:any;
  /** Action props */
  // onFramePressablePress?: () => void;
};


const TrainDetails = ({
  trainNumber,
  trainTime,
  trainTimeStatus,
  trainName,
  run_days,
}: TrainSectionType) => {
  const navigation = useNavigation();
  
  const onFramePressablePress=()=>{
    navigation.navigate("CurrentTrip",{trainNo:trainNumber})
  }

  return (
    <Pressable
      style={[styles.frameParent,]}
      onPress={onFramePressablePress}
    >
      <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
        <View style={styles.wrapper}>
          <Text style={[styles.text, styles.textTypo]}>{trainNumber}</Text>
        </View>
        <View style={styles.amParent}>
          <Text style={styles.amTypo}>{trainTime}</Text>
          <Text style={[styles.pm, styles.amTypo]}>{trainTimeStatus}</Text>
        </View>
      </View>
      <View style={[styles.intercityExpressParent, styles.frameParentFlexBox]}>
        <Text style={[styles.amTypo,{letterSpacing:-1,}]}>{trainName?.slice(0,33)}</Text>
       {run_days.length ==7? (<>
        <Text style={[styles.minsLate, styles.textTypo]}>
          Run Daily
        </Text>
        </>):(<><Text style={[styles.minsLate, styles.textTypo,{letterSpacing:-1}]}>
          {run_days.map(d=>{return(d.slice(0,2)+" ")})}
        </Text></>)
        }
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {  //
    // flex:1,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  textTypo: {//
    textAlign: "center",
    textAlignVertical:'center',
    fontFamily: FontFamily.interRegular,
    fontSize: 16,
  },
  amTypo: {//
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: 16,
  },
  text: {  //
    color: Color.white,
  },
  minsLate: {
    color: Color.darkslateblue,
  },
  wrapper: {  //
    backgroundColor: Color.darkslateblue,
    padding:3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  pm: {//
    marginLeft: 16,
  },
  amParent: {//
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameGroup: { //
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  intercityExpressParent: {//
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameParent: { //
    // position: "absolute",
    // top: 95,
    left: 9,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 0.5,
    width: '96%',
    height:80,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:20,
  },
});

export default TrainDetails;
