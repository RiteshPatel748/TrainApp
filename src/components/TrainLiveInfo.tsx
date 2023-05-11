import * as React from "react";
import { Text, StyleSheet, View, Pressable,Image } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";

type TrainInfoType = {
    stationName?: string;
    arrivedTime?: string;
    departedTime?: string;
  };
const TrainLiveInfo =({stationName,arrivedTime,departedTime}:TrainInfoType)=>{
    return(
     <View style={[styles.currentTripInner, styles.currentInnerPosition]}>
        <View style={[styles.vectorGroup, styles.vectorFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-10.png")}
          />
          <Text style={[styles.jabalpur, styles.jabalpurTypo]}>{stationName}</Text>
          <Text style={[styles.am, styles.amTypo]}>{arrivedTime}</Text>
          <Text style={[styles.am1, styles.amTypo]}>{departedTime}</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    vectorFlexBox: {
      paddingVertical: 0,
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: Color.white,
    },
    currentInnerPosition: {
      left: "2.5%",
    //   right: "8.33%",
      width: "95%",
      height:35,
      alignItems: "center",
    //   flexDirection: "row",
    //   position: "absolute",
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
    // currentTripChild: {
    //   height: "65.62%",
    //   width: "94.44%",
    //   top: "7.19%",
    //   right: "2.78%",
    //   bottom: "27.19%",
    //   left: "2.78%",
    //   backgroundColor: "#bccef0",
    //   borderRadius: Border.br_xs,
    //   position: "absolute",
    // },
    // instanceChild: {
    //   width: 23,
    //   height: 22,
    // },
    // history: {
    //   fontSize: FontSize.size_xl,
    //   letterSpacing: 1.6,
    //   lineHeight: 27,
    //   textAlign: "center",
    //   marginLeft: 24,
    //   color: Color.black,
    //   fontFamily: FontFamily.interRegular,
    // },
    // vectorParent: {
    //   width: 360,
    //   height: 40,
    //   paddingHorizontal: Padding.p_smi,
    //   alignItems: "center",
    // },
    // topbar: {
    //   top: 0,
    //   right: "0%",
    //   left: "0%",
    //   flexDirection: "row",
    //   position: "absolute",
    //   width: "100%",
    //   backgroundColor: Color.white,
    // },
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
      alignItems: "center",
    },
    am1: {
      display: "flex",
    },
    vectorGroup: {
      height: 20,
      paddingHorizontal: Padding.p_lg,
      alignItems: "center",
      borderRadius: Border.br_xs,
      flex: 1,
    },
    currentTripInner: {
    //   top: "12.34%",
    //   bottom: "83.75%",
    marginBottom:50,
    },
    // frameView: {
    //   top: "20.78%",
    //   bottom: "75.31%",
    // },
    // jabalpur2: {
    //   fontSize: FontSize.size_5xs,
    //   letterSpacing: 0.6,
    //   lineHeight: 11,
    // },
    // currentTripInner1: {
    //   top: "29.22%",
    //   bottom: "66.88%",
    // },
    // currentTripInner2: {
    //   top: "37.5%",
    //   bottom: "58.59%",
    // },
    // currentTripInner3: {
    //   top: "45.78%",
    //   bottom: "50.31%",
    // },
    // currentTripInner4: {
    //   top: "54.06%",
    //   bottom: "42.03%",
    // },
    // currentTripInner5: {
    //   top: "62.5%",
    //   bottom: "33.59%",
    // },
    // currentTripItem: {
    //   height: "57.81%",
    //   width: "1.39%",
    //   top: "11.09%",
    //   right: "85.28%",
    //   bottom: "31.09%",
    //   left: "13.33%",
    //   borderRadius: 18,
    //   backgroundColor: "#393939",
    //   position: "absolute",
    // },
    // vectorIcon: {
    //   height: "2.34%",
    //   width: "5.56%",
    //   top: "13.12%",
    //   right: "83.19%",
    //   bottom: "84.53%",
    //   left: "11.25%",
    //   maxWidth: "100%",
    //   maxHeight: "100%",
    //   position: "absolute",
    //   overflow: "hidden",
    // },
  });
  
export default TrainLiveInfo;
  