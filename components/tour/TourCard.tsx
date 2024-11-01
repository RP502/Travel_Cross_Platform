import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CardTourProps } from "@/constants/Tour";
import { Colors } from "@/constants/Colors";
import IMAGES from "@/assets/images";
import { Href, router } from "expo-router";
import { Tour } from "@/redux/tours/tourType";
import { useDispatch, useSelector } from "react-redux";
import { WishItem } from "@/redux/wishlist/wishItemType";
import { generateRandomId } from "@/utils/generateRamdomId";
import { deleteWishListById, insertWishList } from "@/api/wishlist";
import { AppDispatch } from "@/redux/store";
import { auth } from "@/firebaseConfig";
import { fetchWishListAsync } from "@/redux/wishlist/wishilistSlice";
import { fetchToursAsync } from "@/redux/tours/toursSlice";

interface TourCardProps {
  tour: Tour;
  isMinWidth?: boolean;
}

const TourCard: React.FC<TourCardProps> = ({ tour, isMinWidth }) => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = auth.currentUser?.uid;

  const wishList: WishItem[] = useSelector(
    (state: any) => state.wishlist.wishlist
  );

  const initWish = wishList.find(
    (item) => item.tourId === tour.tourId && item.type === "tour"
  );

  const [isWish, setIsWish] = useState<boolean>(false);
  const [wishItem, setWishItem] = useState<WishItem | undefined>(undefined);

  useEffect(() => {
    const checkInWishList = wishList.find(
      (item) => item.tourId === tour.tourId && item.type === "tour"
    );
    setIsWish(checkInWishList !== undefined);
    setWishItem(checkInWishList);
  }, [wishList]);

  let { width } = Dimensions.get("window");
  width = isMinWidth
    ? Math.floor((width - 72) / 2)
    : Math.floor((width - 45) / 2);

  const toggleWishList = async () => {
    if (isWish) {
      // Remove from wishlist
      await deleteWishListById(wishItem?.wishId as string);
    } else {
      // Add to wishlist
      const wishData: WishItem = {
        wishId: generateRandomId(10),
        userId: userId as string,
        type: "tour",
        tourId: tour.tourId,
      };
      await insertWishList(wishData);
    }
    dispatch(fetchWishListAsync(userId as string));
    dispatch(fetchToursAsync());
  };

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
        <TouchableOpacity style={styles.whislist} onPress={toggleWishList}>
          <Fontisto
            name="heart-alt"
            size={20}
            color={isWish ? Colors.light.primary_01 : Colors.light.text}
          />
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
              fontSize: 12,
              fontFamily: "Poppins-Medium",
            }}
          >
            đ{" "}
            {(tour.price - (tour.price * tour.sale) / 100).toLocaleString(
              "vi-VN"
            )}
          </Text>
          {tour.sale !== 0 && (
            <Text
              style={{
                color: Colors.light.text_secondary,
                fontSize: 12,
                fontFamily: "Poppins-Medium",
                textDecorationLine: "line-through",
              }}
            >
              đ {tour.price.toLocaleString("vi-VN")}
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
