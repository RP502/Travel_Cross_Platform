import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { backNavigationOption } from "@/utils/BackNavigation";

const TourLayout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="tour_schedule/index"
        options={backNavigationOption("Lịch trình tour")}
      />
      <Stack.Screen
        name="info_booking/index"
        options={backNavigationOption("Hoàn tất đơn hàng")}
      />
      <Stack.Screen
        name="payment/index"
        options={backNavigationOption("Chọn phương thức thanh toán")}
      />
      <Stack.Screen
        name="credit_card/index"
        options={backNavigationOption("Nhập thông tin thẻ")}
      />
    </Stack>
  );
};

export default TourLayout;

const styles = StyleSheet.create({});
