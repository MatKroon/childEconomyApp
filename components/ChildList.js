import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { tailwind } from "../Tailwind";
import { useNavigation } from "@react-navigation/native";
const ChildList = ({ children }) => {
  const navigation = useNavigation();

  return children.map((child) => (
    <View style={styles.item}>
      {/* <View style={styles.square}></View> */}
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

      {/* <View style={styles.circular}></View> */}
    </View>
  ));
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },

  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default ChildList;
