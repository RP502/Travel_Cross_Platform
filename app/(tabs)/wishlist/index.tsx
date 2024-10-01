import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import NonWhishList from "@/components/wishlist/NonWhishList";
import WhishList from "@/components/wishlist/WhishList";

const WishlistScreen = () => {
  const [wishlists, setWishlists] = useState([]);

  return (
    <ScrollView style={styles.container}>
      {wishlists.length === 0 ? <NonWhishList /> : <WhishList />}
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
