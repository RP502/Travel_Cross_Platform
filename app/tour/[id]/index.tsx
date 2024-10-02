import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";
import BackNavigation from "@/components/navigation/BackNavigation";
import SlideList from "@/components/slider";
import { SliderList } from "@/constants/Sider";
import { Colors } from "@/constants/Colors";
import IMAGES from "@/assets/images";
import { AntDesign } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

let { width, height } = Dimensions.get("window");

const tour = {
  id: "1",
  name: "Tour Động Phong Nha",
  image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
  type: "Beach",
  evaluation: 4.5,
  evaluationCount: 120,
  booking: 80,
  price: 200,
  sale: 150,
  isWhislist: true,
};

const DetailTour: React.FC = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <BackNavigation />
        <SlideList isFullScreen={true} dataList={SliderList} />
      </View>

      <View style={styles.contentContaier}>
        <View>
          <Text
            style={{
              color: Colors.light.text,
              fontSize: 20,
              fontFamily: "Poppins-Bold",
              textAlign: "left",
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {tour.name}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              marginVertical: 3,
            }}
          >
            <Image
              source={IMAGES.EVALUATION}
              style={{
                width: 28,
                height: 18,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            />
            <Text
              style={{
                color: Colors.light.primary_01,
                fontSize: 14,
                fontFamily: "Poppins-Regular",
              }}
            >
              {tour.evaluation}
            </Text>
            <Text
              style={{
                color: Colors.light.text_secondary,
                fontSize: 14,
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
                fontSize: 14,
                fontFamily: "Poppins-Regular",
              }}
            >
              {tour.booking} Đã được đặt
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", gap: 4, justifyContent: "flex-end" }}
          >
            <Text
              style={{
                color: Colors.light.primary_01,
                fontSize: 14,
                fontFamily: "Poppins-Medium",
              }}
            >
              Từ đ {tour.price}
            </Text>
            {tour.sale && (
              <Text
                style={{
                  color: Colors.light.text_secondary,
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  textDecorationLine: "line-through",
                }}
              >
                đ{(tour.price * tour.sale) / 100}
              </Text>
            )}
          </View>
        </View>

        {/* service */}

        <View style={styles.labelContainer}>
          <MaterialIcons
            name="brightness-7"
            size={24}
            color={Colors.light.primary_01}
          />
          <Text style={styles.labelText}>Các gói dịch vụ</Text>
        </View>

        

      </View>
    </ScrollView>
  );
};

export default DetailTour;

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    width: width,
    height: Math.floor(height / 2.5),
  },
  contentContaier: {
    flex: 1,
    backgroundColor: "white",
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  labelText: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    paddingLeft: 8,
  },
});
