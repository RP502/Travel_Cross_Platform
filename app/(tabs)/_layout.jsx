import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome, Entypo, MaterialIcons, Feather } from '@expo/vector-icons'

import { Colors } from "../../constants/Colors"


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
        name="discount/index"
        options={{
          title: 'Ưu đãi',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="discount" size={24} color={color} />
          ),
        }}
      />
      
        <Tabs.Screen
        name="wishlist/WishlistScreen"
        options={{
          title: "Yêu thích",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite" size={24} color={color} /> // Corrected "wishlist" to "favorite" as MaterialIcons doesn't have a "wishlist" icon
          ),
        }}
      />
      <Tabs.Screen
        name="notification/NotificationScreen"
        options={{
          title: "Thông báo",
          tabBarIcon: ({ color }) => (
            <Feather name="bell" size={24} color={color} /> // Corrected "notification" to "bell"
          ),
        }}
      />
       <Tabs.Screen
        name="profile/index"
        options={{
          title: "Tài khoản",
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
