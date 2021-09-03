import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

// import { HomeScreen } from "./screens/HomeScreen";

import Task from "./components/Task";
import { tailwind } from "./Tailwind";

const Stack = createNativeStackNavigator();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    async () => {
      AsyncStorage.getItem("token").then((data) => setToken(data));
    };
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
        }}
      >
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Awesome app",
          }}
        ></Stack.Screen> */}

        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} setToken={setToken} token={token} />}
        </Stack.Screen>

        {/* <Stack.Screen name="Home" component={HomeScreen}>
          <HomeScreen token={token} />
        </Stack.Screen> */}
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = (props) => {
  return (
    <View style={tailwind("flex-1 bg-gray-100")}>
      {props.token !== null ? (
        <View style={tailwind("pt-10 px-5")}>
          <Text style={tailwind("text-2xl font-bold")}>Today's Task</Text>
          <View style={styles.items}>
            <Task text={"test"} />
            <Task text={"test"} />
            <TouchableOpacity
              style={tailwind("bg-gray-300 rounded-3xl mt-5")}
              onPress={() => props.setToken(null)}
              accessibilityLabel="Learn more about this purple button"
            >
              <Text style={tailwind("text-center text-white text-xl p-2")}>Logout (tmp)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tailwind("bg-gray-300 rounded-3xl mt-5")}
              onPress={() => props.navigation.navigate("Test")}
              accessibilityLabel="Learn more about this purple button"
            >
              <Text style={tailwind("text-center text-white text-xl p-2")}>
                navigate to new screen
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={tailwind("pt-10 px-5")}>
          <Text style={tailwind("text-2xl font-bold")}>Ingen token, måste loga in..</Text>
          <Text style={tailwind("text-sm")}>
            Här skall inloggningen in och en jwt otken för att auteikera sig mot API:t skapas.
          </Text>
          <TouchableOpacity
            style={tailwind("bg-indigo-700 rounded-3xl mt-5")}
            onPress={() => props.setToken("abc")}
            accessibilityLabel="Learn more about this purple button"
          >
            <Text style={tailwind("text-center text-white text-xl p-2")}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

function TestScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});

export default App;

// const storeData = async (value) => {
//   try {
//     await AsyncStorage.setItem("@storage_Key", value);
//   } catch (e) {
//     // saving error
//   }
// };
