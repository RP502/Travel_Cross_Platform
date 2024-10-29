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
import { CardTourProps } from "@/constants/Tour";
import { Colors } from "@/constants/Colors";
import IMAGES from "@/assets/images";
import { Href, router } from "expo-router";
import { Tour } from "@/redux/tours/tourType";

interface TourCardProps {
  tour: Tour;
  isMinWidth?: boolean;
}

const TourCard: React.FC<TourCardProps> = ({ tour, isMinWidth }) => {
  let { width } = Dimensions.get("window");
  width = isMinWidth
    ? Math.floor((width - 72) / 2)
    : Math.floor((width - 45) / 2);

  return (
    <TouchableOpacity
      style={[styles.container, { width }]}
      onPress={() => router.push(`/tour/${tour.tourId}/` as Href)}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: tour.image[0] }}
          style={{
            width,
            height: 140,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <TouchableOpacity style={styles.whislist}>
          <Fontisto name="heart-alt" size={20} color={Colors.light.text} />
        </TouchableOpacity>
        {tour.sale !== 0 && (
          <View style={[styles.sale]}>
            <Text style={styles.textSale}>Tiết kiệm {tour.sale}%</Text>
          </View>
        )}
      </View>

      <View style={styles.contentContainer}>
        <Text
          style={{
            color: Colors.light.neutral_04,
            fontSize: 10,
            fontFamily: "Poppins-Regular",
          }}
        >
          {tour.type}
        </Text>
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
          {tour.name}
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
            {tour.evaluation}
          </Text>
          <Text
            style={{
              color: Colors.light.text_secondary,
              fontSize: 10,
              fontFamily: "Poppins-Regular",
            }}
          >
            ({tour.evaluationCount})
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
            {tour.booking} Đã được đặt
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
            Từ đ {tour.price}
          </Text>
          {tour.sale !==0 && (
            <Text
              style={{
                color: Colors.light.text_secondary,
                fontSize: 10,
                fontFamily: "Poppins-Medium",
                textDecorationLine: "line-through",
              }}
            >
              đ{(tour.price * tour.sale) / 100}
            </Text>
          )}
        </View>

        <View>
          <View
            style={{
              padding: 3,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: Colors.light.primary_01,
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                color: Colors.light.primary_01,
                fontSize: 8,
                fontFamily: "Poppins-Regular",
              }}
            >
              Chính sách đảm bảo giá tốt
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TourCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    // shadowColor: "#000", // Shadow color for iOS
    // shadowOffset: { width: 1, height: 2 }, // Shadow offset for iOS
    // shadowOpacity: 0.8, // Shadow opacity for iOS
    // shadowRadius: 3, // Shadow radius for iOS
    // elevation: 5, // Elevation for Android
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
