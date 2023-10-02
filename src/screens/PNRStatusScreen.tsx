import * as React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Pressable,
  Text,
  Alert,
} from "react-native";
import PNRStatusContainer from "../components/PNRStatusContainer";
import { Padding, Color, Border, FontFamily } from "../../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const PNRStatusScreen = () => {
  const navigation = useNavigation();
  const [pnr,setPnr]=useState('')
  return (
    <View style={[styles.pnrStatusScreen, styles.frameInnerFlexBox]}>
      <PNRStatusContainer
        pnrNumber={require("../assets/arrow-2.png")}
        pnrStatus="PNR Status"
        topBarRight="0%"
        topBarLeft="0%"
      />
      <View style={styles.triphistory}>
        <View style={styles.ellipseParent}>
          <TextInput
            style={[styles.madanMahalStation, styles.findTrainsFlexBox]}
            placeholder="Enter PNR"
            keyboardType="default"
            placeholderTextColor="#fff"
            onChangeText={setPnr}
            value={pnr}
          />
        </View>
        <View style={[styles.vectorParent, styles.vectorParentSpaceBlock]}>
          <Image
            style={[styles.frameItem, styles.frameItemLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-3.png")}
          />
        </View>
        <TouchableOpacity
          style={[styles.findTrainsWrapper, styles.vectorParentSpaceBlock]}
          onPress={()=>{if(!pnr){return(Alert.alert(`PNR is empty`))} navigation.navigate("PNRScreen",{pnr:pnr});}}
        >
          <Text style={[styles.findTrains, styles.findTrainsFlexBox]}>
            Find PNR Status
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameInnerFlexBox: {//
    overflow: "hidden",
    flex: 1,
  },
 findTrainsFlexBox: {//
    flex: 1,
    alignSelf: "stretch",
    textAlignVertical:'center'
  },
  vectorParentSpaceBlock: {//
    marginTop: 5,
    paddingVertical: 0,
    flexDirection: "row",
  },
  frameItemLayout: {//
    width: 24,
    height: 0,
  },
  madanMahalStation: {//
    marginLeft: 10,
    alignSelf: "stretch",
  },
  ellipseParent: {//
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    height: 40,
    backgroundColor: Color.darkslategray_100,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: Border.br_3xs,
  },
  frameItem: {//
    height: 0,
  },
  vectorParent: {//
    height: 24,
    paddingHorizontal: Padding.p_mini,
    justifyContent: "space-between",
    display: "none",
    alignSelf: "stretch",
  },
  findTrains: {//
    fontSize: 17,
    letterSpacing: 1.4,
    lineHeight: 23,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  findTrainsWrapper: {//
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
  triphistory: {//
    position: "absolute",
    width: "90.28%",
    top: 68,
    right: "4.72%",
    left: "5%",
    backgroundColor: Color.lightgray,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingBottom: Padding.p_8xs,
    alignItems: "center",
    borderRadius: Border.br_3xs,
  },
  pnrStatusScreen: {//
    backgroundColor: Color.white,
    width: "100%",
    height: 640,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
});

export default PNRStatusScreen;
