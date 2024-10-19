import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

interface LabelToggleProps {
  title: string;
  isShow: boolean;
  handleToggle: () => void;
}

const LabelToggle: React.FC<LabelToggleProps> = ({
  title,
  isShow,
  handleToggle,
}) => {
  return (
    <TouchableOpacity onPress={handleToggle}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
        LabelToggle
      </Text>
      {isShow ? (
        <Entypo name="chevron-thin-down" size={18} color="black" />
      ) : (
        <Entypo name="chevron-thin-up" size={18} color="black" />
      )}
    </TouchableOpacity>
  );
};

export default LabelToggle;

const styles = StyleSheet.create({});
