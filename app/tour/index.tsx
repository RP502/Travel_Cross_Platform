import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { backNavigationOption } from "@/utils/BackNavigation";
import { Colors } from "@/constants/Colors";
import Fillter from "@/components/tour/tour_list/Fillter";

const TourList = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions(backNavigationOption("Danh sách tour"));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Fillter />

      <View>
        <ScrollView></ScrollView>
      </View>
    </View>
  );
};

export default TourList;

const styles = StyleSheet.create({
  fillterBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  fillterText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: Colors.light.text,
  },
});
