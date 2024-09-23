import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "@/components/navigation/BottomTabNavigation";

const HomeScreen = () => {
  return <BottomTabNavigation />;
};

export default HomeScreen;

const styles = StyleSheet.create({});
