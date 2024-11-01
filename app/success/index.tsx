import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Colors } from "@/constants/Colors";
import { router, useNavigation } from "expo-router";
import IMAGES from "@/assets/images";

const Success = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Image
          source={IMAGES.SUCCESS}
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            marginTop: 100,
          }}
        />

        <Text style={{ fontSize: 24, textAlign: "center", marginTop: 50 }}>
          Thanh toán thành công
        </Text>
      </View>

      <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.navigate("/(tabs)")}
        >
          <Text style={styles.btnText}>Quay về trang chủ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Colors.light.primary_01,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    color: Colors.light.white,
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
});
