import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface BottomBookingProps {
  price: number;
  sale?: number;
}

const BottomBooking: React.FC<BottomBookingProps> = ({ price, sale }) => {
  return (
    <View
      style={{
        height: 95,
        borderTopColor: Colors.light.neutral_04,
        borderTopWidth: 1,
        paddingBottom: 20,
        backgroundColor: "white",
        paddingHorizontal: 16,

        shadowColor: "#000", // Shadow color for iOS
        shadowOffset: { width: 1, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.8, // Shadow opacity for iOS
        shadowRadius: 3, // Shadow radius for iOS
        elevation: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text
          style={{
            color: Colors.light.primary_01,
            fontSize: 20,
            fontFamily: "Poppins-Medium",
          }}
        >
          {price} vnđ
        </Text>
        {sale && (
          <Text
            style={{
              color: Colors.light.text_secondary,
              fontSize: 14,
              fontFamily: "Poppins-Medium",
              textDecorationLine: "line-through",
            }}
          >
            {(price * sale) / 100}vnđ
          </Text>
        )}
      </View>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity
          style={{
            paddingVertical: 5,
            borderRadius: 10,
            backgroundColor: Colors.light.white,
            borderColor: "black",
            borderWidth: 1,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins-Medium",
              textAlign: "center",
              color: Colors.light.text,
            }}
          >
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            paddingVertical: 5,
            borderRadius: 10,
            shadowColor: "#000",
            backgroundColor: Colors.light.primary_01,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins-Medium",
              textAlign: "center",
              color: Colors.light.white,
            }}
          >
            Đặt ngay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBooking;

const styles = StyleSheet.create({});
