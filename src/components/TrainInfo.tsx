import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";

type TrainInfoType = {
  interCity1?: string;
  prop?: string;
  aM?: string;
  pM?: string;

  /** Action props */
  onFramePressablePress?: () => void;
};

const TrainInfo = ({
  onFramePressablePress,
  interCity1,
  prop,
  aM,
  pM,
}: TrainInfoType) => {
  return (
    <Pressable style={[styles.intercity1Parent,{height:50,}]} onPress={onFramePressablePress}>
      <Text style={[styles.intercity1, styles.textTypo]}>{interCity1}</Text>
      <Text style={styles.textTypo}>{prop}</Text>
      <Text style={styles.textTypo}>{aM}</Text>
      <Text style={styles.textTypo}>{pM}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
  },
  intercity1: {
    width: 90,
  },
  intercity1Parent: {
    // height:8,
    alignSelf: "stretch",
    flex: 1,
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
    flexDirection: "row",
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    justifyContent: "space-between",
  },
});

export default TrainInfo;


{/* <ScrollView style={{marginTop:60}}>
{trains.data.map((data)=>{return(<TrainInfo
  onFramePressablePress={() => navigation.navigate("CurrentTrip")}
  interCity1={data.train_name}
  prop={data.train_number}
  aM={data.from_sta}
  pM={data.to_sta}
  />)})}
</ScrollView> */}