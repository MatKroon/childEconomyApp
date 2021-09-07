import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";

import { tailwind } from "../../Tailwind";

function DepositChild(props) {
  const [amount, setAmount] = useState();

  const handlesubmit = () => {
    setAmount("");
    addDeposit(amount);
  };

  return (
    <View style={tailwind("flex-1 bg-gray-100 py-5 px-5")}>
      <Text style={tailwind("text-2xl mt-4")}>Egen insättning</Text>

      <Text style={tailwind("text-l")}>
        Pengarna måste get till dina föräldrar och då kan de godkänna instättnignen så att pengrna
        syna här i appen.
      </Text>

      <View style={tailwind("pt-5 ")}>
        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5  bg-white border-2 border-gray-300")}
          onChangeText={setAmount}
          value={amount}
          placeholder={""}
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={tailwind("bg-gray-900 rounded-3xl mt-5")}
          onPress={() => handlesubmit()}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={tailwind("text-center text-white text-xl p-2")}>Sätt in pengar</Text>
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

export default DepositChild;
