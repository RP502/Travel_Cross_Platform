import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import IMAGES from "@/assets/images";
import { router } from "expo-router";

const BackNavigation: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color={Colors.light.text_secondary}
        />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          gap: 10,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.rightBox}>
          <Image style={styles.image} source={IMAGES.WISHLIST} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightBox}>
          <Image style={styles.image} source={IMAGES.CART} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BackNavigation;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 0,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 40 : 20,
  },
  backBtn: {
    padding: 10,
    borderRadius: 20,
    opacity: 0.5,
    backgroundColor: Colors.light.white,
  },
  rightBox: {
    backgroundColor: Colors.light.white,
    borderRadius: 999,
    padding: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
});
