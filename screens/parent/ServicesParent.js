import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { tailwind } from "../../Tailwind";

function ServicesParent(props) {
  const navigation = useNavigation();

  // useEffect(() => {
  //   const fetchObj = {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${props.token}`,
  //     },
  //   };
  //   fetch("http://localhost:3000/api/services/", fetchObj)
  //     .then((response) => response.json())
  //     .then((services) => props.setServices(services));
  //   return () => {
  //     //   editChild(child);
  //   };
  // }, []);

  const reject = (id) => {
    setActions(actions.filter((a) => a.id !== id));
  };

  const approve = () => {
    alert("aproved");
  };

  return (
    <View style={tailwind("flex-1 bg-gray-100 py-5 px-5")}>
      <View style={tailwind("pt-5 ")}>
        <FlatList
          style={tailwind("")}
          data={props.services}
          renderItem={({ item }) => (
            <View style={tailwind("flex-row")}>
              <Text style={tailwind("flex-grow-0")}>{item.title}</Text>
              <View style={tailwind("flex-grow")} />
              <Text style={tailwind("flex-grow-0")}>{item.value}</Text>

              <TouchableOpacity onPress={() => approve()} style={tailwind("flex-grow-0 mx-5")}>
                <Text stsssyle={tailwind("font-bold")}>+</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => reject(item.id)} style={tailwind("flex-grow-0")}>
                <Text style={tailwind("font-bold")}>x</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity
          style={tailwind("bg-gray-900 rounded-3xl mt-5")}
          onPress={() => navigation.navigate("AddService")}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={tailwind("text-center text-white text-xl p-2")}>Lägg till tjänst</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ServicesParent;
