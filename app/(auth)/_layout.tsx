import React from "react";
import { Stack, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import CustomHeaderTitle from "@/components/CustomHeaderTitle";

export default function AuthLayout() {
  
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ title: "Login" }}
      />
      <Stack.Screen name="register" options={{ title: "Register" }} />
    </Stack>
  );
}
