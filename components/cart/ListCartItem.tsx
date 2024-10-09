import { ScrollView, StyleSheet, Text, View } from "react-native";
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
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <FlashList
        data={loremData}
        renderItem={({ item }) => <CartItem {...item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: Colors.light.neutral_04 }} />}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={157}
      />
    </ScrollView>
  );
};

export default ListCartItem;

const styles = StyleSheet.create({});
