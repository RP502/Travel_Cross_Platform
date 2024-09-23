import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationScreen from "@/screens/Notification/NotificationScreen";
import HomeScreen from "@/screens/home/HomeScreen";
import ProfileScreen from "@/screens/profile/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const Tab = createBottomTabNavigator();
const tabBarStyle = {
  padding: 20,
  borderRadius: 20,
  height: 80,
  position: "absolute",
  bottom: 20,
  left: 20,
  right: 20,
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#FF7E01",
        tabBarInactiveTintColor: "#FF7E01",
        tabBarStyle: { paddingBottom: 48 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          //  tabBarStyle: tabBarStyle,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              color={focused ? Colors.light.primary_01 : Colors.light.white}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          //  tabBarStyle: tabBarStyle,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              color={focused ? Colors.light.primary_01 : Colors.light.white}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          //  tabBarStyle: tabBarStyle,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={focused ? Colors.light.primary_01 : Colors.light.white}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
