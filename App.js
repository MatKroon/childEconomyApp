import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

import HomeParent from "./screens/parent/HomeParent";
import ChildParent from "./screens/parent/ChildParent";
import AddChild from "./screens/parent/AddChild";
import AddService from "./screens/parent/AddService";
import ServicesParent from "./screens/parent/ServicesParent";
import CreateAccountParent from "./screens/parent/CreateAccountParent";

import Wellcome from "./screens/Wellcome";

import HomeChild from "./screens/child/HomeChild";
import ServicesChild from "./screens/child/ServicesChild";
import DepositChild from "./screens/child/DepositChild";
import AddSavingsGoal from "./screens/child/AddSavingsGoal";
import CreateAccountChild from "./screens/child/CreateAccountChild";
import LoginChild from "./screens/child/LoginChild";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Alert } from "react-native";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

// App js is leaded
// Home scrren is open. if token is there show ---> WHAT HOME?

function App() {
  const [token, setToken] = useState(null);
  const [userKind, setUserKind] = useState(null);
  const [children, setChildren] = useState([]);
  const [services, setServices] = useState([]);
  const [savingGoal, setSavingGoal] = useState(false);
  const [child, setChild] = useState({});
  let blockOnce = true;

  // useEffect(() => {
  //   async () => {
  //     AsyncStorage.getItem("token").then((data) => setToken(data));
  //     AsyncStorage.getItem("kind").then((data) => setUserKind(data));
  //   };
  // }, []);

  // child = "";
  // (async () => {
  //   const rawResponse = await fetch("http://localhost:3000/api/children/", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${props.token}`,
  //     },
  //   });
  //   // const content = await rawResponse.json();
  //   child = await rawResponse.json();
  // })();

  const authChild = (user) => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3000/api/children/auth/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      alert(JSON.stringify(rawResponse));
      const content = await rawResponse.json();

      setToken(content.token);
      setUserKind("child");
      AsyncStorage.setItem("token", content.token);
      AsyncStorage.setItem("kind", "child");
    })();

    // måste kolla om det finns ett parn med lösen och pass. omm det finns skall en token returnera. med typ och id.

    // if (true) {
    // } else {
    //   Alert.alert("Inte korrekta anvädnare uppgifter");
    // }
  };

  const addChild = (child) => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3000/api/children/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(child),
      });
      // const content = await rawResponse.json();

      if (rawResponse) {
        setChildren([...children, child]);
        Alert.alert(`${child.name} tillagd`);
      }
    })();
  };

  const createUser = (user) => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3000/api/parents/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (rawResponse) {
        getToken(user);
      }
    })();
  };

  const getToken = (user) => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3000/api/auth/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const content = await rawResponse.json();

      setToken(content.token);
      setUserKind("parent");
      AsyncStorage.setItem("token", content.token);
      AsyncStorage.setItem("kind", "parent");

      // HÄR SKALL DET VERIFERIAS ATT TOEKN ETC. SATT MED .then()...
      // if (content) {
      //   setChildren([...children, child]);
      //   Alert.alert(`${child.name} tillagd`);
      // }
    })();
  };

  const addSavingGoal = (saveGoal) => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3000/api/savinggoals/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(saveGoal),
      });

      setSavingGoal(saveGoal.goal);
      Alert.alert(`Mål tillagt`);
      // const content = await rawResponse.json();
    })();
  };

  const addService = (service) => {
    (async () => {
      const rawResponse = await fetch("http://localhost:3000/api/services/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(service),
      });

      setServices([...services, service]);
      Alert.alert(`${service.title} tillagd`);
      // const content = await rawResponse.json();
    })();
  };

  const linksChildStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" options={{ title: "Home", headerShown: false }}>
          {(props) => (
            <HomeChild
              {...props}
              setToken={setToken}
              token={token}
              child={child}
              setChild={setChild}
              blockOnce={blockOnce}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="DepositChild" options={{ title: "" }}>
          {(props) => <DepositChild {...props} />}
        </Stack.Screen>
        <Stack.Screen name="AddSavingsGoal" options={{ title: "" }}>
          {(props) => <AddSavingsGoal {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  };

  const getNavigation = (user) => {
    if (user == "child") {
      return (
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: "#e91e63",
            labelStyle: { fontSize: 12 },

            style: { backgroundColor: "powderblue" },
          }}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="Home" component={linksChildStack} options={{ tabBarLabel: "Barn" }} />
          <Tab.Screen
            name="ServicesChild"
            component={ServicesChild}
            options={{ tabBarLabel: "Tjänster" }}
          />
        </Tab.Navigator>
      );
    }
    if (user == "parent") {
      return (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            // headerShown: false,
            headerTintColor: "white",
            headerStyle: { backgroundColor: "tomato" },
          }}
        >
          <Stack.Screen name="Home" options={{ title: "Home", headerShown: false }}>
            {(props) => (
              <HomeParent
                {...props}
                token={token}
                setToken={setToken}
                children={children}
                setChildren={setChildren}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="AddChild" options={{ title: "" }}>
            {(props) => <AddChild {...props} addChild={addChild} />}
          </Stack.Screen>

          <Stack.Screen name="ChildParent" options={{ title: "" }}>
            {(props) => <ChildParent {...props} />}
          </Stack.Screen>

          <Stack.Screen name="AddService" options={{ title: "" }}>
            {() => <AddService addService={addService} />}
          </Stack.Screen>

          <Stack.Screen name="ServicesParent" options={{ title: "" }}>
            {(props) => (
              <ServicesParent
                {...props}
                token={token}
                services={services}
                setServices={setServices}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      );
    }
  };

  return (
    <NavigationContainer>
      {token !== null ? (
        getNavigation(userKind)
      ) : (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            // headerShown: false,
            headerTintColor: "white",
            headerStyle: { backgroundColor: "tomato" },
          }}
        >
          <Stack.Screen name="Wellcome" options={{ title: "Home", headerShown: false }}>
            {(props) => <Wellcome {...props} setToken={setToken} setUserKind={setUserKind} />}
          </Stack.Screen>
          <Stack.Screen name="CreateAccountParent" options={{ title: "Home", headerShown: false }}>
            {(props) => (
              <CreateAccountParent
                {...props}
                createUser={createUser}
                setToken={setToken}
                setUserKind={setUserKind}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="CreateAccountChild" options={{ title: "Home", headerShown: false }}>
            {(props) => (
              <CreateAccountChild
                {...props}
                createUser={createUserChild}
                setToken={setToken}
                setUserKind={setUserKind}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="LoginChild" options={{ title: "Home", headerShown: false }}>
            {(props) => (
              <LoginChild
                {...props}
                auth={authChild}
                setToken={setToken}
                setUserKind={setUserKind}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
