import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import EmptyCart from "@/components/cart/EmptyCart";
import ListCartItem from "@/components/cart/ListCartItem";

const Cart = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Giỏ hàng",
      headerStyle: {
        backgroundColor: Colors.light.primary_01,
      },
      headerTintColor: Colors.light.white,
      headerTitleStyle: {
        fontFamily: "Poppins-Bold",
      },
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  const [cartProductList, setCartProductList] = useState([1, 2]);

  return cartProductList.length > 0 ? (
    // is not empty
    <ListCartItem />
  ) : (
    // is empty
    <EmptyCart />
  );
};

export default Cart;

const styles = StyleSheet.create({});
