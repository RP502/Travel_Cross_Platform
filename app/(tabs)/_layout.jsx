import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

import { Colors } from "../../constants/Colors"
import { FontAwesome } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary_01,
        tabBarLabelStyle: {
          fontSize: 14, 
          fontFamily: "Poppins-Bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about/index"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
