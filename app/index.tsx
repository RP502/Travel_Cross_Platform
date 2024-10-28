import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./(auth)/login";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { router } from "expo-router";
import { addLocations, addTours } from "@/utils/addData";

const Index: React.FC = () => {
  const [isLogined, setIsLogined] = useState<boolean>(false);


  const [fontsLoaded] = useFonts({
    Poppins: require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("@/assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("@/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Thin": require("@/assets/fonts/Poppins-Thin.ttf"),
  });

  // Early return for loading state or fonts not loaded
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  // isFirstTime
  AsyncStorage.getItem("isFirstTime").then((value) => {

    if (value === null) {
      AsyncStorage.setItem("isFirstTime", "false");
      router.navigate("/onboarding");
    } else {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          router.navigate("/(tabs)");
        } else {
          router.navigate("/(auth)/login");
        }
      });
    }
  });
};

export default Index;
