import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";

import { tailwind } from "../../Tailwind";

function AddChild(params, { addChild }) {
  const [name, setName] = useState();
  const [allowance, setAllowance] = useState();
  const [interest, setInterest] = useState();

  const handlesubmit = () => {
    let child = {
      name,
      allowance,
      interest,
    };
    setName("");
    setAllowance("");
    setInterest("");
    addChild(child);
  };

  return (
    <View style={tailwind("flex-1 bg-gray-100 py-5 px-5")}>
      <Text>Lägg till ett barn </Text>
      <View style={tailwind("pt-5 ")}>
        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5 border-1 bg-white border-2 border-gray-300")}
          onChangeText={setName}
          value={name}
          placeholder={"Namn"}
          keyboardType="numeric"
        />

        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5 border-1 bg-white border-2 border-gray-300")}
          onChangeText={setAllowance}
          value={allowance}
          placeholder={"Månadspeng"}
          keyboardType="numeric"
        />

        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5 border-1 bg-white border-2 border-gray-300")}
          onChangeText={setInterest}
          value={interest}
          placeholder={"Ränta"}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={tailwind("bg-gray-900 rounded-3xl mt-5")}
          onPress={() => handlesubmit()}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={tailwind("text-center text-white text-xl p-2")}>Lägg till barn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddChild;
