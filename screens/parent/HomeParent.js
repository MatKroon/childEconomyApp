import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import ChildList from "../../components/ChildList";
import { tailwind } from "../../Tailwind";

const HomeParent = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((resp) => resp.json())
      .then((p) => setProducts(p));
  }, []);

  const [children, setChildren] = useState([
    { id: 1, name: "kalle", funds: 200, allowance: 100, interest: 2 },
    { id: 2, name: "greta", funds: 200, allowance: 100, interest: 3 },
  ]);
  const [tasks, setTasks] = useState([
    { id: 1, name: "Tvätta", pay: 50, description: "", rules: "", img_url: "" },
  ]);

  useEffect(() => {
    fetch("http://localhost:3000/api/children/{TOKEN}")
      .then((response) => response.json())
      .then((children) => setProducts(children));

    fetch("http://localhost:3000/api/children/{TOKEN}")
      .then((response) => response.json())
      .then((tasks) => setProducts(tasks));
  }, []);

  return (
    <View style={tailwind("flex-1 bg-gray-100")}>
      {props.token !== null ? (
        <View style={tailwind("pt-10 px-5")}>
          <Text style={tailwind("text-2xl mt-8 font-bold")}>Dina barn</Text>
          <View style={styles.items}>
            <ChildList children={children} />
            <View style={tailwind("")}>
              {/* <TouchableOpacity
                style={tailwind("bg-gray-400 rounded-3xl mt-5")}
                onPress={() => props.setToken(null)}
                accessibilityLabel="Learn more about this purple button"
              >
                <Text style={tailwind("text-center text-white text-xl p-2")}>loga ut</Text>
              </TouchableOpacity> */}
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
            </View>
          </View>
        </View>
      ) : (
        <View style={tailwind("pt-10 px-5")}>
          <Text style={tailwind("text-2xl font-bold")}>Ingen token, måste loga in..</Text>
          <Text style={tailwind("text-sm")}>
            Här skall inloggningen in och en jwt otken för att auteikera sig mot API:t skapas.
          </Text>
          <TouchableOpacity
            style={tailwind("bg-indigo-700 rounded-3xl mt-5")}
            onPress={() => props.setToken("abc")}
            accessibilityLabel="Learn more about this purple button"
          >
            <Text style={tailwind("text-center text-white text-xl p-2")}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

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
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
});
export default HomeParent;
