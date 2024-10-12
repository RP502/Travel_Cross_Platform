import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { backNavigationOption } from "@/utils/BackNavigation";

const TourLayout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="book_tour/index" />
      <Stack.Screen
        name="tour_schedule/index"
        options={backNavigationOption("Lịch trình tour")}
      />
    </Stack>
  );
};

export default TourLayout;

const styles = StyleSheet.create({});
