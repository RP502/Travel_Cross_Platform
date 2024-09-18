import React from "react";
import { Stack, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import CustomHeaderTitle from "@/components/CustomHeaderTitle";
import { Ionicons } from '@expo/vector-icons'; // or any icon library you prefer
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import BackButton from "@/components/navigation/BackButton";


export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.background,
        },
        headerTintColor: Colors.light.text,
        headerTitleStyle: {
          fontFamily: "Poppins-Bold",
        },
      }}
    >
      <Stack.Screen
        name="login/index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register/index"
        options={{
          title: "Đăng ký",
          headerLeft: () => <BackButton />,
        }}
      />
    </Stack>
  );
}
