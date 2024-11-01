import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import NonWhishList from "@/components/wishlist/NonWhishList";
import WhishList from "@/components/wishlist/WhishList";
import { useSelector } from "react-redux";
import { WishItem } from "@/redux/wishlist/wishItemType";

const WishlistScreen = () => {
  const wishlist: WishItem[] = useSelector((state: any) => state.wishlist.wishlist);

  return (
    <ScrollView style={styles.container}>
      {wishlist.length === 0 ? <NonWhishList /> : <WhishList wishlist={wishlist} />}
    </ScrollView>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 30,
  },
});
