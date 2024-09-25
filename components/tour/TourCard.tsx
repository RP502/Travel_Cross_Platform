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
import { CardTourProps } from "@/constants/Tour";
import { Colors } from "@/constants/Colors";

const TourCard: React.FC<CardTourProps> = (tour: CardTourProps) => {
  let { width } = Dimensions.get("window");
  width = width - 32 - 5;
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: tour.image }} style={{ width, height: 140 }} />
        <TouchableOpacity style={styles.whislist}>
          <Fontisto
            name="heart-alt"
            size={20}
            color={tour.isWhislist ? Colors.light.primary_01 : Colors.light.red}
          />
        </TouchableOpacity>
        {tour.sale && (
          <View
            style={[
                styles.sale,
            ]}
          >
            <Text style={styles.textSale}>
              Tiết kiệm {tour.sale}%
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default TourCard;

const styles = StyleSheet.create({
  container: {},
  imageContainer: {},
  whislist: {},
  sale: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: Colors.light.red,
    padding: 5,
    borderRadius: 5,
  },
  textSale: {
    fontSize: 12,
    fontFamily: "Poppins-Bold",
    color: Colors.light.white,
  }
});
