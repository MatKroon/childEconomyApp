import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";

import { CheckBox } from "react-native-elements";

import { tailwind } from "../../Tailwind";

function AddSavingsGoal(props) {
  const [description, setDescription] = useState();
  const [goal, setGoal] = useState();
  const [isShowParent, setIsShowParent] = useState(true);
  const handlesubmit = () => {
    let savingGoal = {
      description,
      goal,
      isShowParent,
    };
    setDescription("");
    setGoal("");
    setIsShowParent(true);
    addSavingGoal(savingGoal);
  };

  return (
    <View style={tailwind("flex-1 bg-white py-5 px-5")}>
      <Text style={tailwind("text-2xl mt-4")}>Sparmål</Text>

      <Text style={tailwind("text-l")}>
        Har du något du länktar efter att köpa? Lägg till ett sparmål så hjälper vi dig att se hur
        långt du har kvar.
      </Text>
      <View style={tailwind("pt-5 ")}>
        <View style={tailwind("pt-5 flex flex-row")}>
          <CheckBox
            title="Visa för föräldrar"
            checked={isShowParent}
            onPress={() => (isShowParent ? setIsShowParent(false) : setIsShowParent(true))}
          />
        </View>

        <TextInput
          style={tailwind("rounded-md py-8 px-6 mt-5 bg-white border-2 border-gray-300")}
          onChangeText={setDescription}
          value={description}
          multiline={true}
          placeholder={"Beskrivning"}
          keyboardType="text"
        />

        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5  bg-white border-2 border-gray-300")}
          onChangeText={setGoal}
          value={goal}
          placeholder={"Sparmål (kr)"}
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={tailwind("bg-gray-900 rounded-3xl mt-5")}
          onPress={() => handlesubmit()}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={tailwind("text-center text-white text-xl p-2")}>Lägg till mål</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tailwind("bg-gray-900 rounded-3xl mt-5")}
          onPress={() => props.navigation.navigate("Home")}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={tailwind("text-center text-white text-xl p-2")}>Tillbaka</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
export default AddSavingsGoal;
