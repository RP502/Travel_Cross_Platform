import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Address } from "@/redux/locations/locationType";
import { Colors } from "@/constants/Colors";

const AddressBtn: React.FC<Address> = (item: Address) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: item.isActived
            ? Colors.light.green
            : Colors.light.addressNormal,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: item.isActived ? Colors.light.white : Colors.light.text },
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
