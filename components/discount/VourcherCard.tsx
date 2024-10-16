import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";

export interface VourcherCardProps {
  discoutnCode: string;
  discountValue: number;
  discountType: string;
  isSave: boolean;
  condition: string;
}

let { width } = Dimensions.get("window");
width = Math.floor((width - 72)/3);

const VourcherCard: React.FC<VourcherCardProps> = ({
  discountValue,
  condition,
  isSave,
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Poppins-Bold",
          color: Colors.light.red,
        }}
      >
        Giảm {discountValue}%
      </Text>

      <Text
        style={{
          fontSize: 12,
          fontFamily: "Poppins-Regular",
          color: Colors.light.text_secondary,
          textAlign: "center",
        }}
      >
        {condition}
      </Text>

      {isSave ? (
        <View
          style={{
            flexDirection: "row",
            gap: 3,
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.8,
          }}
        >
          <AntDesign
            name="checkcircle"
            size={16}
            color={Colors.light.primary_01}
          />
          <Text
            style={{
              color: Colors.light.primary_01,
              fontSize: 12,
              fontFamily: "Poppins-Regular",
            }}
          >
            Đã lưu
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          style={{
            borderRadius: 10,
            backgroundColor: Colors.light.primary_01,
            paddingVertical: 3,
            paddingHorizontal: 8,
          }}
        >
          <Text
            style={{
              color: Colors.light.white,
              fontSize: 12,
              fontFamily: "Poppins-Regular",
              textAlign: "center",
            }}
          >
            Lưu mã
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VourcherCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    width: width,
    backgroundColor: "#F4DDDD",
    borderRadius: 10,
    padding: 10,
    
  },
});
