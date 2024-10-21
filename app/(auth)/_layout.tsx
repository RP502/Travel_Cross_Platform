import React from "react";
import { Stack, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import CustomHeaderTitle from "@/components/CustomHeaderTitle";
import { Ionicons } from '@expo/vector-icons'; // or any icon library you prefer
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import BackButton from "@/components/navigation/BackButton";
import { backNavigationOption } from "@/utils/BackNavigation";


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
          title: "Đăng nhập",
        }}
      />
      <Stack.Screen
        name="register/index"
        options={backNavigationOption("Đăng ký")}
      />
      <Stack.Screen
        name="forget_password/index"
        options={backNavigationOption("Quên mật khẩu")}
      />
      <Stack.Screen
        name="otp/index"
        options={backNavigationOption("OTP")}
      />
    </Stack>
  );
}
