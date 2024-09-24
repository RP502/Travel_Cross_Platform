import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "@/components/onboarding/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./(auth)/login";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Index: React.FC = () => {

  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);


  const [fontsLoaded] = useFonts({
    Poppins: require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("@/assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("@/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Thin": require("@/assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    const getIsFirstTime = async () => {
      // Check if the app is being opened for the first time
      const isFirstTime = await AsyncStorage.getItem("isFirstTime");
      if (isFirstTime) {
        setIsFirstTime(false);
        setLoading(false);
      } else {
        await AsyncStorage.setItem("isFirstTime", "false");
      }
    };
    getIsFirstTime();
  }, []);

   // Early return for loading state or fonts not loaded
   if (!fontsLoaded || loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <Onboarding />
  );
};

export default Index;
