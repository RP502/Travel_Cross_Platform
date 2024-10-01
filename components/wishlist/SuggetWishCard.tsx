import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SuggetWishCardProps } from "@/constants/SuggetWishList";
import { Colors } from "@/constants/Colors";
import { Fontisto } from "@expo/vector-icons";

const SuggetWishCard: React.FC<SuggetWishCardProps> = ({
  image,
  name,
  isWish,
  price,
}) => {
  let { width } = Dimensions.get("window");
  width = Math.floor((width - 40) / 2);
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: 100, borderRadius: 15 }}
      />
      <TouchableOpacity style={styles.whislist}>
        <Fontisto
          name="heart-alt"
          size={20}
          color={isWish ? Colors.light.neutral_04 : Colors.light.red}
        />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text
          style={{ fontSize: 14, fontFamily: "Poppins-Bold" }}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {name}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins-Regular",
              color: Colors.light.text_secondary,
            }}
          >
            từ đ
          </Text>
          <Text style={{ fontSize: 13, fontFamily: "Poppins-Medium", color: Colors.light.red }}>
            {price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SuggetWishCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  whislist: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  contentContainer: {},
});
