import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import ChildList from "../../components/ChildList";
import { tailwind } from "../../Tailwind";

const HomeParent = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Tvätta", pay: 50, description: "", rules: "", img_url: "" },
  ]);

  useEffect(() => {
    const fetchObj = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
    };
    fetch("http://localhost:3000/api/children/", fetchObj)
      .then((response) => response.json())
      .then((children) => props.setChildren(children));

    // fetch("http://localhost:3000/api/children/{TOKEN}")
    //   .then((response) => response.json())
    //   .then((tasks) => setTasks(tasks));
  }, []);

  return (
    <ScrollView style={tailwind("flex-1 bg-gray-100")}>
      <View style={tailwind("pt-10 px-5")}>
        <Text style={tailwind("text-2xl mt-8 mb-5 font-bold")}>Dina barn</Text>

        <ChildList children={props.children} />
        <View style={tailwind("")}>
          <TouchableOpacity
            style={tailwind("bg-gray-900 rounded-3xl mt-5")}
            onPress={() => props.navigation.navigate("ServicesParent")}
            accessibilityLabel="Learn more about this purple button"
          >
            <Text style={tailwind("text-center text-white text-xl p-2")}>Tjänster</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind("bg-gray-900 rounded-3xl mt-5")}
            onPress={() => props.navigation.navigate("AddChild")}
            accessibilityLabel="Learn more about this purple button"
          >
            <Text style={tailwind("text-center text-white text-xl p-2")}>Lägg till barn</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tailwind(" rounded-3xl mt-20")}
            onPress={() => {
              props.setToken(null);
            }}
            accessibilityLabel="Learn more about this purple button"
          >
            <Text style={tailwind("text-center text-grey-600 text-xl p-2")}>loga ut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeParent;
