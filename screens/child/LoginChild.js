import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";

import { tailwind } from "../../Tailwind";

function LoginChild(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handlesubmit = () => {
    let user = {
      username,
      password,
    };

    props.auth(user);
  };

  return (
    <View style={tailwind("flex-1 bg-gray-100 py-5 px-5")}>
      <Text style={tailwind("text-2xl mt-12")}>Logga in </Text>
      <View style={tailwind("pt-5 ")}>
        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5 bg-white border-2 border-gray-300")}
          onChangeText={setUserName}
          value={username}
          placeholder={"Username"}
          hint="Username"
          keyboardType="text"
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

        <TouchableOpacity
          style={tailwind("bg-gray-900 rounded-3xl mt-5")}
          onPress={() => handlesubmit()}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={tailwind("text-center text-white text-xl p-2")}>Logga in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginChild;
