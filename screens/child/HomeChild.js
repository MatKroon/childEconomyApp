import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import SavingGoal from "../../components/SavingGoal";
import { tailwind } from "../../Tailwind";

import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from "react-native-responsive-linechart";

const HomeChild = (props) => {
  let savingGoal = 3800;

  const [tasks, setTasks] = useState([
    { id: 4, name: "Tvätta", pay: 50, description: "", rules: "", img_url: "" },
    { id: 1, title: "Tvättat", kind: "work", value: 100 },
    { id: 2, title: "Insättning", kind: "Insättning", value: 200 },
    { id: 3, title: "Diskat", kind: "work", value: 100 },
  ]);

  if (typeof props.child.name == "undefined") {
    const fetchObj = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
    };
    fetch("http://localhost:3000/api/children/", fetchObj)
      .then((response) => response.json())
      .then((child) => props.setChild(child));
  }

  return (
    <ScrollView style={tailwind("flex-1 bg-gray-100")}>
      <View style={tailwind("pt-10 px-5")}>
        <Text style={tailwind("text-2xl mt-8 mb-3 font-bold")}>
          Din ekonomi, {props.child.name}
        </Text>
        <Chart
          style={{ height: 200, width: 340 }}
          // här kan vi hämta navändarens alla förändringar på kontot och då få datum och totlat värde
          // ta bort alla datum som är längre bort än 6 månader och mapa

          data={[
            { x: -2, y: 15 },
            { x: -1, y: 10 },
            { x: 0, y: 12 },
            { x: 5, y: 8 },
            { x: 6, y: 12 },
            { x: 7, y: 14 },
            { x: 8, y: 12 },
            { x: 9, y: 13.5 },
            { x: 10, y: 18 },
          ]}
          // padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
          // xDomain={{ min: -2, max: 10 }}
          // yDomain={{ min: -4, max: 20 }}
        >
          <VerticalAxis tickCount={10} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
          <HorizontalAxis tickCount={3} />
          <Area
            theme={{
              gradient: { from: { color: "#44bd32" }, to: { color: "#44bd32", opacity: 0.2 } },
            }}
          />
          <Line theme={{ stroke: { color: "#44bd32", width: 5 } }} />
        </Chart>

        <View style={tailwind("mt-3 text-lg")}>
          <Text style={tailwind("text-lg")}>Kontot totalt: {props.child.funds} kr</Text>
          <Text style={tailwind("text-lg")}>Din ränta: {props.child.interest} % </Text>
          <Text style={tailwind("text-lg")}>
            Nästa instättning: 2021-11-01 ({props.child.allowance} kr)
          </Text>
        </View>
        <View>
          {savingGoal ? (
            <>
              <SavingGoal savingGoal={savingGoal} funds={props.child.funds} />
              <TouchableOpacity onPress={() => props.navigation.navigate("AddSavingsGoal")}>
                <Text style={tailwind("text-right")}> ändra mål</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={tailwind("bg-gray-900 rounded-3xl mt-5")}
              onPress={() => props.navigation.navigate("AddSavingsGoal")}
              accessibilityLabel="Learn more about this purple button"
            >
              <Text style={tailwind("text-center text-white text-xl p-2")}>Sparmål</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={tailwind("bg-gray-900 mt-4 rounded-3xl mt-5")}
            onPress={() => props.navigation.navigate("DepositChild")}
            accessibilityLabel="Learn more about this purple button"
          >
            <Text style={tailwind("text-center text-white text-xl p-2")}>Egen instättning</Text>
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

export default HomeChild;
