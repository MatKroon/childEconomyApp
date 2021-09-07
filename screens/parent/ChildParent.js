import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";

import { tailwind } from "../../Tailwind";

function ChildParent(props) {
  const [child, setChild] = useState(props.route.params);
  const [actions, setActions] = useState([]);

  useEffect(() => {
    const fetchObj = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTYzMDc3ODAxMH0.5pni0uXGTPllz_gfzZ1ZZ8GUyAsV6Kx-8l50_mSNNjw",
      },
    };
    fetch(`http://localhost:3000/api/services/${child.id}`, fetchObj)
      .then((response) => response.json())
      .then((actions) => setActions(actions));
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
      <View>
        <Text style={tailwind("text-base font-bold mt-4")}>Tjänster och instättningar</Text>

        <Text style={tailwind("text-l")}></Text>

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
        <Text style={tailwind("text-base font-bold mt-8")}>Månadspeng</Text>
        <TextInput
          style={tailwind("rounded-md py-3 px-6  bg-white border-2 border-gray-300")}
          onChangeText={changeAllowance}
          value={child.allowance}
          placeholder={`${child.allowance}`}
          keyboardType="numeric"
        />
        <Text style={tailwind("text-base font-bold mt-4")}>Ränta på kapital</Text>
        <TextInput
          style={tailwind("rounded-md py-3 px-6  bg-white border-2 border-gray-300")}
          onChangeText={changeInterest}
          value={child.interestrate}
          placeholder={`${child.interestrate}`}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}

export default ChildParent;
