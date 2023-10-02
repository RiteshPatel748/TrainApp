import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppProvider, UserProvider} from '@realm/react';
import {appId, baseUrl} from './atlasConfig.json';
import {WelcomeView} from './src/WelcomeView';
import {realmContext} from './src/RealmContext';
import TrainsScreen from "./src/screens/TrainsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CurrentTrip from "./src/screens/CurrentTrip";
import PNRStatusScreen from "./src/screens/PNRStatusScreen";
import LiveStationScreen from "./src/screens/LiveStationScreen";
import SearchTrainScreen from "./src/screens/SearchTrainScreen";
import TestScreen from './src/screens/testscreen';
import PNRScreen from './src/screens/PNRScreen';
const {RealmProvider} = realmContext;

const Stack = createStackNavigator();

const AppWrapper = () => {
  return (
    <AppProvider id={appId} baseUrl={baseUrl}>
      <UserProvider fallback={WelcomeView}>
        <App />
      </UserProvider>
    </AppProvider>
  );
};

const LoadingIndicator = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const App = () => {
  return (
    <>
      <RealmProvider
        sync={{
          flexible: true,
          onError: (_, error) => {
            console.error(error);
          },
        }}
        fallback={LoadingIndicator}>
        <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CurrentTrip"
              component={CurrentTrip}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PNRStatusScreen"
              component={PNRStatusScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PNRScreen"
              component={PNRScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LiveStationScreen"
              component={LiveStationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchTrainScreen"
              component={SearchTrainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrainsScreen"
              // component={TestScreen}
              component={TrainsScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
      </NavigationContainer> 
      </SafeAreaProvider>
      </RealmProvider>
    </>
  );
};

const styles = StyleSheet.create({
  footerText: {
    fontSize: 12,
    textAlign: 'center',
  },
  footer: {
    padding: 24,
  },
  activityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default AppWrapper;
