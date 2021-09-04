import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";

import { tailwind } from "../../Tailwind";

function ServicesParent(params) {
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

  return (
    <View style={tailwind("flex-1 bg-gray-100 py-5 px-5")}>
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
export default ServicesParent;
