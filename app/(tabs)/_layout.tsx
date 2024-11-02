import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  FontAwesome,
  Entypo,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Colors } from "../../constants/Colors";
import IMAGES from "../../assets/images"; // Ensure this is the correct path

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.light.primary_01,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Poppins-Regular",
        },
        tabBarStyle: {
          height: 85,
          backgroundColor: Colors.light.white,
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Trang chủ",

          tabBarIcon: ({ color, focused }) => (
            <Image
              source={focused ? IMAGES.HOME_ACTIVE : IMAGES.HOME} // Ensure this points to the correct image
              style={{
                width: 24, // Updated for correct size
                height: 24,
                // Apply the color to the image
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="discount/index"
        options={{
          title: "Ưu đãi",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={focused ? IMAGES.SALES_ACTIVE : IMAGES.SALES} // Ensure this points to the correct image
              style={{
                width: 24, // Updated for correct size
                height: 24,
                // Apply the color to the image
              }}
            />
          ),
          headerStyle: { backgroundColor: Colors.light.primary_01 },
          headerTintColor: Colors.light.white,
        }}
      />

      <Tabs.Screen
        name="wishlist/index"
        options={{
          title: "Yêu thích",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={focused ? IMAGES.WISHLIST_ACTIVE : IMAGES.WISHLIST} // Ensure this points to the correct image
              style={{
                width: 24, // Updated for correct size
                height: 24,
                // Apply the color to the image
              }}
            />
          ),
          headerStyle: { backgroundColor: Colors.light.primary_01 },
          headerTintColor: Colors.light.white,
        }}
      />

      <Tabs.Screen
        name="notification/index"
        options={{
          title: "Thông báo",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused ? IMAGES.NOTIFICATION_ACTIVE : IMAGES.NOTIFICATION
              } // Ensure this points to the correct image
              style={{
                width: 24, // Updated for correct size
                height: 24,
                // Apply the color to the image
              }}
            />
          ),
          headerStyle: { backgroundColor: Colors.light.primary_01 },
          headerTintColor: Colors.light.white,
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          headerShown: false,
          title: "Tài khoản",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color={focused ? Colors.light.primary_01 : "#2E2E5D"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
