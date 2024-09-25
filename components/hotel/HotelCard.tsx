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
import { CardHotelProps } from "@/constants/Hotel";
import { Colors } from "@/constants/Colors";
import IMAGES from "@/assets/images";

const HotelCard: React.FC<CardHotelProps> = (hotel: CardHotelProps) => {
  let { width } = Dimensions.get("window");
  width = Math.floor((width - 20) / 2);
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: hotel.image }}
          style={{
            width,
            height: 140,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <TouchableOpacity style={styles.whislist}>
          <Fontisto
            name="heart-alt"
            size={20}
            color={
              hotel.isWhislist ? Colors.light.primary_01 : Colors.light.red
            }
          />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: Colors.light.green,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Poppins-Medium",
              color: Colors.light.white,
              padding: 2,
            }}
          >
            {hotel.provine}
          </Text>
        </View>
        {hotel.sale && (
          <View style={[styles.sale]}>
            <Text style={styles.textSale}>Tiết kiệm {hotel.sale}%</Text>
          </View>
        )}
      </View>

      <View style={styles.contentContainer}>
        <Text
          style={{
            color: Colors.light.text,
            fontSize: 13,
            fontFamily: "Poppins-Bold",
            textAlign: "left",
          }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {hotel.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image
            source={IMAGES.EVALUATION}
            style={{
              width: 14,
              height: 9,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          />
          <Text
            style={{
              color: Colors.light.primary_01,
              fontSize: 10,
              fontFamily: "Poppins-Regular",
            }}
          >
            {hotel.evaluation}
          </Text>
          <Text
            style={{
              color: Colors.light.text_secondary,
              fontSize: 10,
              fontFamily: "Poppins-Regular",
            }}
          >
            ({hotel.evaluationCount})
          </Text>
          <AntDesign
            name="caretright"
            size={10}
            color={Colors.light.text_secondary}
          />
          <Text
            style={{
              color: Colors.light.text_secondary,
              fontSize: 10,
              fontFamily: "Poppins-Regular",
            }}
          >
            {hotel.booking} Đã được đặt
          </Text>
        </View>

        <View style={{ flexDirection: "row", gap: 4 }}>
          <Text
            style={{
              color: Colors.light.primary_01,
              fontSize: 10,
              fontFamily: "Poppins-Medium",
            }}
          >
            Từ đ {hotel.price}
          </Text>
          {hotel.sale && (
            <Text
              style={{
                color: Colors.light.text_secondary,
                fontSize: 10,
                fontFamily: "Poppins-Medium",
                textDecorationLine: "line-through",
              }}
            >
              đ{(hotel.price * hotel.sale) / 100}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 1, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.8, // Shadow opacity for iOS
    shadowRadius: 3, // Shadow radius for iOS
    elevation: 5, // Elevation for Android
    marginBottom: 10,
  },
  imageContainer: {},
  whislist: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  sale: {
    position: "absolute",
    bottom: 8,
    left: 2,
    backgroundColor: Colors.light.red,
    padding: 5,
    borderRadius: 5,
  },
  textSale: {
    fontSize: 12,
    fontFamily: "Poppins-Bold",
    color: Colors.light.white,
  },
  contentContainer: {
    padding: 8,
    backgroundColor: Colors.light.white,
    flexDirection: "column",
    gap: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
