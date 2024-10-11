import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import CartItem, { CartItemProps } from "./CartItem";
import { Colors } from "@/constants/Colors";

const loremData: CartItemProps[] = [
  {
    id: "1",
    name: "Trip to Paris",
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
    price: 1200,
    date: "2023-10-01",
    shortDescription: "A wonderful trip to Paris.",
    adultQuantity: 2,
    childQuantity: 1,
  },
  {
    id: "2",
    name: "Trip to New York",
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
    price: 1500,
    date: "2023-11-15",
    shortDescription: "Explore the city that never sleeps.",
    adultQuantity: 1,
    childQuantity: 0,
  },
  {
    id: "3",
    name: "Trip to Tokyo",
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
    price: 1800,
    date: "2024-03-20",
    shortDescription: "Experience the culture of Tokyo.",
    adultQuantity: 2,
    childQuantity: 2,
  },
];

const ListCartItem = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <FlashList
          data={loremData}
          renderItem={({ item }) => <CartItem {...item} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{ height: 1, backgroundColor: Colors.light.neutral_04 }}
            />
          )}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={157}
        />
      </ScrollView>

      <View
        style={{
          marginVertical: 10,
          paddingHorizontal: 16,
          paddingBottom: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderTopWidth: 1,
          borderTopColor: Colors.light.neutral_04,
          paddingTop: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins-Regular",
              color: Colors.light.text_secondary,
            }}
          >
            Tổng cộng: 3 sản phẩm
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Bold",
              color: Colors.light.red,
            }}
          >
            Tổng tiền: 4500$
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.light.primary_01,
            borderRadius: 10,
            padding: 10,
            width: 120,
          }}
        >
          <Text
            style={{
              color: Colors.light.white,
              fontSize: 16,
              fontFamily: "Poppins-Medium",
              textAlign: "center",
            }}
          >
            Thanh toán
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListCartItem;

const styles = StyleSheet.create({});
