import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";

import { tailwind } from "../../Tailwind";

function AddChild({ addChild }) {
  const [name, setName] = useState();
  const [allowance, setAllowance] = useState();
  const [interestrate, setInterest] = useState();
  const [password, setPassword] = useState();

  const handlesubmit = () => {
    const child = {
      name,
      password,
      allowance: parseInt(allowance),
      interestrate: parseInt(interestrate),
    };
    setName("");
    setPassword("");
    setAllowance("");
    setInterest("");
    addChild(child);
  };

  return (
    <View style={tailwind("flex-1 bg-gray-100 py-5 px-5")}>
      <Text style={tailwind("text-2xl mt-4")}>Lägg till ett barn</Text>

      <Text style={tailwind("text-l")}>
        Barnet kan efter du skapat hen i din app ladda ned appen och fylla i sitt namn och det
        lösenord du givit. Efter inloggning kommer hen inte behöva logga in igen.
      </Text>
      <View style={tailwind("pt-5 ")}>
        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5 bg-white border-2 border-gray-300")}
          onChangeText={setName}
          value={name}
          placeholder={"Namn"}
          keyboardType="numeric"
        />

        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5  bg-white border-2 border-gray-300")}
          onChangeText={setAllowance}
          value={allowance}
          placeholder={"Månadspeng"}
          keyboardType="numeric"
        />

        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5  bg-white border-2 border-gray-300")}
          onChangeText={setInterest}
          value={interestrate}
          placeholder={"Ränta"}
          keyboardType="numeric"
        />

        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5  bg-white border-2 border-gray-300")}
          onChangeText={setPassword}
          value={password}
          placeholder={"Lösenord"}
          keyboardType="text"
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
