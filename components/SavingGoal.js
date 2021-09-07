import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { tailwind } from "../Tailwind";
import ProgressBar from "react-native-animated-progress";
const SavingGoal = ({ savingGoal, funds }) => {
  let savingGoalPercent = Math.round((funds / savingGoal) * 100);

  return (
    <>
      <Text style={tailwind("text-lg mt-6 font-bold")}>
        Ditt sparmål: {savingGoal} kr, {savingGoalPercent} % uppnått
      </Text>
      <ProgressBar
        progress={savingGoalPercent}
        height={20}
        backgroundColor="#4a0072"
        animated={false}
      />
    </>
  );
};

export default SavingGoal;
