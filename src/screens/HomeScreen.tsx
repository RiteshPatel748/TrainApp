import React, {useCallback, useState, useEffect} from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Padding, Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import {realmContext} from '../RealmContext';
import { LogoutButton } from '../LogoutButton';
const {useRealm, useQuery} = realmContext;
const itemSubscriptionName = 'items';
const ownItemsSubscriptionName = 'ownItems';

const HomeScreen = () => {
  const navigation = useNavigation();

  
  return (
    <View style={styles.homeScreen}>
      <TouchableOpacity style={[styles.vectorParent, styles.vectorLayout]} 
          onPress={() => navigation.navigate("SearchTrainScreen")}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.searchTrain, styles.historyTypo]}>
          Search Train
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.vectorGroup, styles.frameViewPosition1]}
          onPress={() => navigation.navigate("PNRStatusScreen")}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.searchTrain, styles.historyTypo]}>PNR Status</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.vectorContainer, styles.frameViewPosition]}
        onPress={() => navigation.navigate("LiveStationScreen")}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.searchTrain, styles.historyTypo]}>
          Live Station
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.frameView, styles.frameViewPosition]}
        onPress={() =>Alert.alert('Upcoming......')}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.searchTrain, styles.historyTypo]}>More</Text>
      </TouchableOpacity>
      <View style={styles.topbar}>
        <View style={[styles.topbar1, styles.topbar1Layout]}>
          <View style={[styles.vectorParent1, styles.topbar1Layout]}>
            <Text style={[styles.history, styles.historyTypo]}>
              Home Screen
            </Text>
            <View style={{top:0,left:150}}>
                <LogoutButton/>
                {/* <OfflineModeButton /> */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorLayout: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    backgroundColor: Color.darkslategray_100,
    borderRadius: Border.br_mini,
    width: "38.89%",
    height: "14.84%",
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
  },
  historyTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  frameViewPosition1: {
    left: "55%",
    right: "6.11%",
  },
  frameViewPosition: {
    bottom: "51.88%",
    top: "33.28%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    backgroundColor: Color.darkslategray_100,
    borderRadius: Border.br_mini,
    width: "38.89%",
    height: "14.84%",
    position: "absolute",
  },
  topbar1Layout: {
    width: 360,
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  vectorIcon: {
    width: 67,
    height: 60,
  },
  searchTrain: {
    fontSize: FontSize.size_mini,
    letterSpacing: 1.2,
    lineHeight: 21,
    color: Color.white,
  },
  vectorParent: {
    top: "13.44%",
    bottom: "71.72%",
    justifyContent: "space-between",
    alignItems: "center",
    left: "5.83%",
    right: "55.28%",
  },
  vectorGroup: {
    top: "13.28%",
    bottom: "71.88%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    backgroundColor: Color.darkslategray_100,
    borderRadius: Border.br_mini,
    width: "38.89%",
    height: "14.84%",
    position: "absolute",
  },
  vectorContainer: {
    left: "5.83%",
    right: "55.28%",
  },
  frameView: {
    left: "55%",
    right: "6.11%",
  },
  instanceChild: {
    width: 21,
    height: 0,
    display: "none",
  },
  history: {
    fontSize: FontSize.size_xl,
    letterSpacing: 1.6,
    lineHeight: 27,
    color: Color.black,
    marginLeft: 24,
  },
  vectorParent1: {
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    height: 40,
    alignItems: "center",
  },
  topbar1: {
    justifyContent: "space-between",
  },
  topbar: {
    height: "6.25%",
    top: "0%",
    right: "-0.14%",
    bottom: "93.75%",
    left: "0.14%",
    flexDirection: "row",
    position: "absolute",
    width: "100%",
  },
  homeScreen: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default HomeScreen;
