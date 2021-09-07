import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { tailwind } from "../Tailwind";

const Wellcome = (props) => {
  return (
    <View style={tailwind("flex-1 bg-gray-100")}>
      <View style={tailwind("pt-10 px-5")}>
        <Text style={tailwind("text-base mt-28 text-center font-bold")}>
          Välkommen till ABCXYZ, appen som hjälper föräldrar och barn med veckopeng och sparande.
        </Text>
        <TouchableOpacity
          style={tailwind("bg-indigo-700 rounded-3xl mt-5")}
          onPress={() => props.navigation.navigate("CreateAccountParent")}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={tailwind("text-center text-white text-xl p-2")}>Parent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tailwind("bg-indigo-700 rounded-3xl mt-5")}
          onPress={() => props.navigation.navigate("LoginChild")}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={tailwind("text-center text-white text-xl p-2")}>Child Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tailwind("mt-5")}
          onPress={() => {
            props.setToken("abc");
            props.setUserKind("child");
          }}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={tailwind("text-center text-gray-500 text-xl p-2")}>
            Har du ett konto, logga in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tailwind("mt-5")}
          onPress={() => {
            props.setToken(
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImsiOiJwIiwiaWF0IjoxNjMwOTQ3MTc4fQ.QvBnQfLVlGakkeVKag-jFV275KrdC7QI9JrJtMUifFY"
            );
            props.setUserKind("parent");
            AsyncStorage.setItem(
              "token",
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImsiOiJwIiwiaWF0IjoxNjMwOTQ3MTc4fQ.QvBnQfLVlGakkeVKag-jFV275KrdC7QI9JrJtMUifFY"
            );
            AsyncStorage.setItem("kind", "parent");
          }}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={tailwind("text-center text-grey-600 text-xl p-2")}>Demo parent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CreateAccountParent")}
          onPress={() => {
            props.setToken(
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImsiOiJjIiwiaWF0IjoxNjMwOTQ3MTA1fQ.Lc_7ii3WB-UWPZKaw5K0HWQlET0xLBYX7OVEWIoUreQ"
            );
            props.setUserKind("child");
            AsyncStorage.setItem(
              "token",
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImsiOiJjIiwiaWF0IjoxNjMwOTQ3MTA1fQ.Lc_7ii3WB-UWPZKaw5K0HWQlET0xLBYX7OVEWIoUreQ"
            );
            AsyncStorage.setItem("kind", "child");
          }}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={tailwind("text-center text-grey-600 text-xl p-2")}>Demo child</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Wellcome;
