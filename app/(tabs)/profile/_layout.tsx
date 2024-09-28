import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ProfileLayout = () => {

  return (
    <>

    <Stack
      initialRouteName="index"
      screenOptions={({ route }) => ({
        headerTintColor: "#000",
        headerTitleStyle: {
          fontFamily: "Poppins-Bold",
          fontSize: 16,
        }, 
      })}
    >
      <Stack.Screen name="index" options={{ headerShown: false, title: "" }} />
      <Stack.Screen
        name="user_information/index"
        options={{
          title: "Thông tin cá nhân",
        }}
      />
    </Stack>
    </>
  );
};

export default ProfileLayout;

const styles = StyleSheet.create({});
