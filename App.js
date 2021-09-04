import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

import HomeParent from "./screens/parent/HomeParent";
import ChildParent from "./screens/parent/ChildParent";
import AddChild from "./screens/parent/AddChild";
import AddService from "./screens/parent/AddService";
import ServicesParent from "./screens/parent/ServicesParent";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    async () => {
      AsyncStorage.getItem("token").then((data) => setToken(data));
    };
  }, []);

  const addChild = () => {
    alert("child added");
  };

  const FirstScreenNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: "Home", headerShown: false }}>
          {(props) => <HomeParent {...props} setToken={setToken} token={token} />}
        </Stack.Screen>
        <Stack.Screen name="AddChild" options={{ title: "" }}>
          {(props) => <AddChild {...props} addChild={addChild} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#e91e63",
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: "powderblue" },
        }}
      >
        <Tab.Screen
          name="Home"
          component={FirstScreenNavigator}
          options={{ tabBarLabel: "Home" }}
        />
        <Tab.Screen
          name="ServicesParent"
          component={ServicesParent}
          options={{ tabBarLabel: "Updates" }}
        />
        {/* <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: "Profile" }} /> */}
      </Tab.Navigator>

      {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // headerShown: false,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
        }}
      >
        <Stack.Screen name="Home" options={{ title: "Home", headerShown: false }}>
          {(props) => <HomeParent {...props} setToken={setToken} token={token} />}
        </Stack.Screen>

        <Stack.Screen name="AddChild" options={{ title: "" }}>
          {(props) => <AddChild {...props} addChild={addChild} />}
        </Stack.Screen>

        <Stack.Screen name="ChildParent" options={{ title: "" }}>
          {(props) => <ChildParent {...props} />}
        </Stack.Screen>

        <Stack.Screen name="AddService" options={{ title: "" }}>
          {(props) => <AddService {...props} addService={addService} />}
        </Stack.Screen>

        <Stack.Screen name="ServicesParent" options={{ title: "" }}>
          {(props) => <ServicesParent {...props} />}
        </Stack.Screen>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
