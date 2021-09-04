import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";

import { tailwind } from "../../Tailwind";

function ChildParent(params) {
  const [child, setChild] = useState(params.route.params);
  const [actions, setActions] = useState([
    { id: 1, title: "Tvättat", kind: "work", value: 100 },
    { id: 2, title: "Insättning", kind: "Insättning", value: 200 },
    { id: 3, title: "Diskat", kind: "work", value: 100 },
  ]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((resp) => resp.json())
      .then((p) => setProducts(p));
    return () => {
      //   editChild(child);
    };
  }, []);

  const reject = (id) => {
    setActions(actions.filter((a) => a.id !== id));
  };

  const approve = () => {
    alert("aproved");
  };

  const changeAllowance = (value) => {
    let updChild = {
      id: child.id,
      name: child.name,
      funds: child.fund,
      allowance: value,
      interest: child.interest,
    };

    setChild(updChild);
  };

  const changeInterest = (value) => {
    let updChild = {
      id: child.id,
      name: child.name,
      funds: child.fund,
      allowance: child.allowance,
      interest: value,
    };

    setChild(updChild);
  };

  return (
    <View style={tailwind("flex-1 bg-gray-100 py-5 px-5")}>
      <View style={tailwind("flex-row")}>
        <View style={tailwind("flex-grow-0")}>
          <Text style={tailwind("text-xl font-bold")}>{child.name}</Text>
          <Text style={tailwind("text-base")}>Veckopeng: {child.allowance} kr</Text>
        </View>
        <View style={tailwind("flex-grow")}></View>
        <Text style={tailwind("flex-grow-0 text-lg font-bold")}>{child.funds} kr</Text>
      </View>
      <View style={tailwind("pt-5 ")}>
        <FlatList
          style={tailwind("")}
          data={actions}
          renderItem={({ item }) => (
            <View style={tailwind("flex-row")}>
              <Text style={tailwind("flex-grow-0")}>{item.title}</Text>
              <View style={tailwind("flex-grow")} />
              <Text style={tailwind("flex-grow-0")}>{item.value}</Text>
              <TouchableOpacity onPress={() => approve()} style={tailwind("flex-grow-0 mx-5")}>
                <Text stsssyle={tailwind("font-bold")}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => reject(item.id)} style={tailwind("flex-grow-0")}>
                <Text style={tailwind("font-bold")}>x</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5 border-1 bg-white border-2 border-gray-300")}
          onChangeText={changeAllowance}
          value={child.allowance}
          placeholder={`${child.allowance}`}
          keyboardType="numeric"
        />

        <TextInput
          style={tailwind("rounded-md py-3 px-6 mt-5 border-1 bg-white border-2 border-gray-300")}
          onChangeText={changeInterest}
          value={child.interest}
          placeholder={`${child.interest}`}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
export default ChildParent;
