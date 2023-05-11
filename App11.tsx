
const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./src/screens/HomeScreen";
import CurrentTrip from "./src/screens/CurrentTrip";
import PNRStatusScreen from "./src/screens/PNRStatusScreen";
import LiveStationScreen from "./src/screens/LiveStationScreen";
import SearchTrainScreen from "./src/screens/SearchTrainScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import TrainsScreen from "./src/screens/TrainsScreen";


// mangoDB start

// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = "mongodb+srv://patelritesh748:iQ6BdkTZR41tXVKf@cluster0.emlctlk.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri,  {
//   serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//   }
// }
// );

// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


//end


const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
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
              component={TrainsScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
