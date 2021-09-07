import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { tailwind } from "../Tailwind";
import { useNavigation } from "@react-navigation/native";
const ChildList = ({ children }) => {
  const navigation = useNavigation();

  return children.map((child) => (
    <View style={tailwind("bg-white p-4 rounded-md flex-row justify-between items-center mb-5 ")}>
      <TouchableOpacity
        style={tailwind("flex-row justify-between items-center p-5")}
        onPress={() => navigation.navigate("ChildParent", child)}
      >
        <View style={tailwind("flex-grow-0")}>
          <Text style={tailwind("text-xl font-bold")}>{child.name}</Text>
          <Text style={tailwind("text-base")}>Veckopeng: {child.allowance} kr</Text>
        </View>
        <View style={tailwind("flex-grow")}></View>

        <Text style={tailwind("flex-grow-0 text-lg font-bold")}>{child.funds} kr</Text>
      </TouchableOpacity>
    </View>
  ));
};

export default ChildList;
