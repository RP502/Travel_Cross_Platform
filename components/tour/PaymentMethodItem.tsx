import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export interface PaymentMethodItemProps {
  title: string;
  image: string;
  isChecked: boolean;
}

const PaymentMethodItem: React.FC<PaymentMethodItemProps> = ({
  title,
  image,
  isChecked,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.light.primary_01,
      }}
    >
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins-Medium",
            color: Colors.light.text,
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 999,
          backgroundColor: isChecked
            ? Colors.light.primary_01
            : Colors.light.text_secondary,
        }}
      />
    </View>
  );
};

export default PaymentMethodItem;

const styles = StyleSheet.create({
  image: {
    width: 28,
    height: 28,
  },
});
