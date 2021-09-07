import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";

import { tailwind } from "../../Tailwind";

function AddService({ addService }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [rules, setRules] = useState();
  const [value, setValue] = useState();

  const handlesubmit = () => {
    let service = {
      title,
      description,
      rules,
      value,
    };
    setTitle("");
    setDescription("");
    setRules("");
    setValue("");
    addService(service);
  };

  return (
    <View style={tailwind("flex-1 bg-gray-100 py-5 px-5")}>
      <Text style={tailwind("text-2xl mt-4")}>Lägg till en tjänst</Text>

      <Text style={tailwind("text-l")}>
        Tjänster är sysslor som ditt barn kan göra hemma hos dig som du är villiga att ersätta hen
        för. T.ex diska eller städa etc.
      </Text>
      <View style={tailwind("pt-5 ")}>
        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5 bg-white border-2 border-gray-300")}
          onChangeText={setTitle}
          value={title}
          placeholder={"Tjänst"}
          keyboardType="text"
        />

        <TextInput
          style={tailwind("rounded-md py-8 px-6 mt-5 bg-white border-2 border-gray-300")}
          onChangeText={setDescription}
          value={description}
          multiline={true}
          placeholder={"Beskrivning"}
          keyboardType="text"
        />

        <TextInput
          style={tailwind("rounded-md py-8 px-6 mt-5  bg-white border-2 border-gray-300")}
          onChangeText={setRules}
          value={rules}
          multiline={true}
          placeholder={"Regler, gärna i punktform"}
          keyboardType="text"
        />

        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5  bg-white border-2 border-gray-300")}
          onChangeText={setValue}
          value={value}
          placeholder={"Ersättning"}
          keyboardType="text"
        />
        <TouchableOpacity
          style={tailwind("bg-gray-900 rounded-3xl mt-5")}
          onPress={() => handlesubmit()}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={tailwind("text-center text-white text-xl p-2")}>Lägg till tjänst</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddService;
