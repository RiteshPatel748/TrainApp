import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../../GlobalStyles";

type TrainSectionType = {
  trainNumber?: string;
  trainTime?: string;
  trainTimeStatus?: string;
  trainName?: string;
  trainDelayStatus?: string;
  trainPlatform?: string;
  trainPlatformName?: string;
  trainDestination?: string;
  trainStatus?: string;

  /** Style props */
  pMTop?: number | string;
  frame102Color?: string;
  propBackgroundColor?: string;

  /** Action props */
  onFramePressablePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const TrainSection = ({
  trainNumber,
  trainTime,
  trainTimeStatus,
  trainName,
  trainDelayStatus,
  trainPlatform,
  trainPlatformName,
  trainDestination,
  trainStatus,
  pMTop,
  frame102Color,
  propBackgroundColor,
  onFramePressablePress,
}: TrainSectionType) => {
  // const framePressableStyle = useMemo(() => {
  //   return {
  //     ...getStyleValue("top", pMTop),
  //   };
  // }, [pMTop]);

  const minsLateStyle = useMemo(() => {
    return {
      ...getStyleValue("color", frame102Color),
    };
  }, [frame102Color]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

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
        <Text style={styles.amTypo}>{trainName}</Text>
        <Text style={[styles.minsLate, styles.textTypo, minsLateStyle]}>
          {trainDelayStatus}
        </Text>
      </View>
      <View style={[styles.frameContainer, styles.frameParentFlexBox]}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/arrow-6.png")}
          />
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/arrow-7.png")}
          />
        </View>
        <View style={styles.frameView}>
          <View style={[styles.jabalpurParent, styles.frameParentFlexBox]}>
            <Text style={styles.amTypo}>{trainPlatform}</Text>
            <Text style={styles.amTypo}>{trainPlatformName}</Text>
          </View>
          <View style={[styles.jabalpurParent, styles.frameParentFlexBox]}>
            <Text style={styles.amTypo}>{trainDestination}</Text>
            <View style={[styles.departedWrapper, frameViewStyle]}>
              <Text style={styles.amTypo}>{trainStatus}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
  },
  amTypo: {
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
  },
  text: {
    color: Color.white,
  },
  wrapper: {
    backgroundColor: Color.darkslateblue,
    width: 40,
    height: 15,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  pm: {
    marginLeft: 16,
  },
  amParent: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameGroup: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  minsLate: {
    color: Color.firebrick,
  },
  intercityExpressParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameChild: {
    width: 11,
    height: 16,
  },
  vectorParent: {
    width: 0,
    height: 22,
    justifyContent: "center",
  },
  jabalpurParent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  departedWrapper: {
    backgroundColor: Color.red,
    width: 58,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameView: {
    flex: 1,
    height: 34,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  frameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
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
    height:120,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:20,
  },
});

export default TrainSection;
