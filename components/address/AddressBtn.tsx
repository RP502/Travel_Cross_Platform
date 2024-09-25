import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AddressProps } from "@/constants/Address";

const AddressBtn: React.FC<AddressProps> = (item: AddressProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: item.isActived
            ? item.backgroundBtnActive
            : item.backgroudBtnNormal,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: item.isActived ? item.textColorActive : item.textColor },
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default AddressBtn;

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  text: {
    fontSize: 13,
    fontFamily: "Poppins-Medium",
  },
});
