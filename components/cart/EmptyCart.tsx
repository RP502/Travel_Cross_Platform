import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import IMAGES from "@/assets/images";
import { Colors } from "@/constants/Colors";

const EmptyCart = () => {
  let { width, height } = Dimensions.get("window");
  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <Image
        source={IMAGES.EMPTY_CART}
        style={{ width: "100%", height: 400, alignSelf: "center" }}
      />
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontFamily: "Poppins-Bold",
            marginTop: 16,
          }}
        >
          Giỏ hàng của bạn trống
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            fontFamily: "Poppins-Regular",
            color: Colors.light.text_secondary,
            marginTop: 8,
          }}
        >
          Hãy thêm sản phẩm vào giỏ hàng của bạn
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.light.primary_01,
            paddingVertical: 8,
            borderRadius: 10,
            marginTop: 16,
            width: width / 2,
            height: 40,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: Colors.light.white,
              fontSize: 14,
              fontFamily: "Poppins-Medium",
              textAlign: 'center'
            }}
          >
            Về trang chủ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({});
