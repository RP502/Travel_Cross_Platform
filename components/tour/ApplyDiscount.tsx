import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

let { width, height } = Dimensions.get("window");

interface ApplyDiscountProps {
   
}

const ApplyDiscount: React.FC<ApplyDiscountProps> = () => {


    const [coupon, setCoupon] = useState<string>("");

   
  return (
    <>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: Colors.light.white,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              width: 3,
              height: "90%",
              borderRadius: 10,
              backgroundColor: Colors.light.primary_01,
              marginRight: 10,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Bold",
              color: Colors.light.text,
            }}
          >
            Giảm giá
          </Text>
        </View>

        {/* Discount */}

        <View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TextInput
              style={{
                flex: 1,
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: Colors.light.text,
                padding: 5,
                borderRadius: 7,
                borderWidth: 1,
                borderColor: Colors.light.neutral_04,
              }}
              placeholder="Nhập mã giảm giá"
              placeholderTextColor={Colors.light.neutral_04}
              value={coupon}
                onChangeText={(text) => setCoupon(text)}
                
            />
            <TouchableOpacity
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                backgroundColor: Colors.light.red,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Bold",
                  color: Colors.light.white,
                  textAlign: "center",
                }}
              >
                Áp dụng
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: Colors.light.text,
              }}
            >
              Giảm:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Bold",
                color: Colors.light.red,
              }}
            >
              1000 vnđ
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ApplyDiscount;

const styles = StyleSheet.create({
  flexStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.neutral_04,
    padding: 16,
  },
});