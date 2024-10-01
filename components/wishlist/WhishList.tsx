import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import FillterItem from "./FillterItem";

const wishlists = [
  {
    name: "Tất cả",
    isActive: true,
  },
  {
    name: "Vé tham quan",
    isActive: false,
  },
  {
    name: "Tour du lịch",
    isActive: false,
  },
  
]

const WhishList = () => {
  const isNull = true;
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.flexStyle}>
          <Text style={styles.labelText}>Danh sách của tôi</Text>
          <Link href="/wishlist" style={styles.linkText}>
            Tạo danh sách
          </Link>
        </View>
        {isNull && (
          <Text style={{}}>Hãy tạo danh sách để lưu các mục bạn muốn mua</Text>
        )}
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.labelText}>Các mục đã lưa</Text>

        <View style={styles.fillterContainer}>
            
            <FlatList 
              data={wishlists}
              renderItem={({ item }) => <FillterItem {...item} />}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={() => <View style={{width: 10}} />}
              horizontal
            />
        </View>
        
      </View>

    </View>
  );
};

export default WhishList;

const styles = StyleSheet.create({
  flexStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkText: {
    textDecorationLine: "underline",
    color: Colors.light.text_secondary,
  },
  secondText: {
    color: Colors.light.text_secondary,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  topContainer: {
    marginBottom: 20,
  },
  bottomContainer: {},
  labelText: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
  },
  fillterContainer: {
    marginTop: 10,
  }
});
