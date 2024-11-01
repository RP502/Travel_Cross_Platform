import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import EmptyCart from "@/components/cart/EmptyCart";
import ListCartItem from "@/components/cart/ListCartItem";
import { backNavigationOption } from "@/utils/BackNavigation";
import { useSelector } from "react-redux";
import { Cart } from "@/redux/cart/cartsType";

const CartScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions(backNavigationOption("Giỏ hàng"));
  }, [navigation]);

  const [cartProductList, setCartProductList] = useState([1, 2]);

  const cartList: Cart[] = useSelector((state: any) => state.carts.carts);

  return cartList.length > 0 ? (
    // is not empty
    <ListCartItem cartList={cartList} />
  ) : (
    // is empty
    <EmptyCart />
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
