import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CardVr360Props } from "@/constants/Vr360";
import { Colors } from "@/constants/Colors";
import IMAGES from "@/assets/images";

const VrCard: React.FC<CardVr360Props> = (vr: CardVr360Props) => {
  let { width } = Dimensions.get("window");
  width = Math.floor((width - 40) / 2);

  let even = false;
  if (vr.index && vr.index % 2 === 0) {
    even = true;
  }

  return (
    <View style={[styles.container, { width, height: 200, marginTop: vr.index === 1 ? 15 : 0 }]}>
      <Image
        source={{ uri: vr.image }}
        style={{ width: "100%", height: "100%", borderRadius: 10 }}
      />
      <View style={styles.nameContaier}>
        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
          {vr.name}
        </Text>
      </View>
    </View>
  );
};

export default VrCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: 5,
  },
  nameContaier: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    color: Colors.light.white,
    fontFamily: "Poppins-Bold",
  },
});
