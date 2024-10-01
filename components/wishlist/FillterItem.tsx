import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface FillterItemProps {
  name: string;
  isActive: boolean;
}

const FillterItem: React.FC<FillterItemProps> = ({ name, isActive }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isActive
            ? Colors.light.primary_01
            : Colors.light.white,
          borderWidth: isActive ? 0 : 1,
          borderColor: Colors.light.neutral_04,
        },
      ]}
    >
      <Text
        style={{
          color: isActive ? Colors.light.white : Colors.light.text_secondary,
          fontSize: 14,
          fontFamily: "Poppins-Regular",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default FillterItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
});
