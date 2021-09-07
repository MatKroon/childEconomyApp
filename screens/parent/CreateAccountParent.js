import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";

import { tailwind } from "../../Tailwind";

function CreateAccountParent(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handlesubmit = () => {
    if (password == confirmPassword) {
      let user = {
        email,
        password,
      };

      props.createUser(user);
    } else {
      Alert.alert("Lösenorden stämmer ej överens");
    }
  };

  return (
    <View style={tailwind("flex-1 bg-gray-100 py-5 px-5")}>
      <View style={tailwind("pt-5 ")}>
        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5 bg-white border-2 border-gray-300")}
          onChangeText={setEmail}
          value={email}
          placeholder={"Email"}
          hint="Email"
          keyboardType="email"
          autocapitalizationType="none"
        />

        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5  bg-white border-2 border-gray-300")}
          onChangeText={setPassword}
          value={password}
          placeholder={"Önskat lösenord"}
          secureTextEntry={true}
          keyboardType="password"
          hint="Password"
          autocapitalizationType="none"
        />

        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5  bg-white border-2 border-gray-300")}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder={"Bekräfta lösenord"}
          keyboardType="password"
          hint="Confirm password"
          secureTextEntry={true}
          autocapitalizationType="none"
        />
        <TouchableOpacity
          style={tailwind("bg-gray-900 rounded-3xl mt-5")}
          onPress={() => handlesubmit()}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={tailwind("text-center text-white text-xl p-2")}>Skapa konto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CreateAccountParent;
