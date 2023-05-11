import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../../GlobalStyles";

type PNRStatusContainerType = {
  pnrNumber?: ImageSourcePropType;
  pnrStatus?: string;

  /** Style props */
  topBarRight?: number | string;
  topBarLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PNRStatusContainer = ({
  pnrNumber,
  pnrStatus,
  topBarRight,
  topBarLeft,
}: PNRStatusContainerType) => {
  const topBarStyle = useMemo(() => {
    return {
      ...getStyleValue("right", topBarRight),
      ...getStyleValue("left", topBarLeft),
    };
  }, [topBarRight, topBarLeft]);

  return (
    <View style={[styles.topbar, topBarStyle]}>
      <View style={[styles.topbar1, styles.topbar1Layout]}>
        <View style={[styles.vectorParent, styles.topbar1Layout]}>
          <Image
            style={styles.instanceChild}
            resizeMode="cover"
            source={pnrNumber}
          />
          <Text style={styles.history}>{pnrStatus}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar1Layout: {
    width: 360,
    backgroundColor: Color.white,
    flexDirection: "row",
  },
  instanceChild: {
    width: 23,
    height: 22,
  },
  history: {
    fontSize: FontSize.size_xl,
    letterSpacing: 1.6,
    lineHeight: 27,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: "center",
    marginLeft: 24,
  },
  vectorParent: {
    height: 40,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    alignItems: "center",
  },
  topbar1: {
    justifyContent: "space-between",
  },
  topbar: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    left: "0%",
    flexDirection: "row",
  },
});

export default PNRStatusContainer;
