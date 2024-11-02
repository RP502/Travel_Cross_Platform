import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/redux/counter/counterSlice";

const NotificationScreen = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const notifications = [
    {
      id: 1,
      title: "Chào mừng bạn!",
      message:
        "Chào mừng bạn đã đến với ứng dụng của chúng tôi. Chúng tôi hy vọng bạn sẽ có những trải nghiệm tuyệt vời!",
    },
    {
      id: 2,
      title: "Cập nhật mới!",
      message:
        "Ứng dụng của chúng tôi vừa được cập nhật với nhiều tính năng mới. Hãy khám phá ngay!",
    },
    // Thêm các thông báo khác ở đây
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f0f8ff",
        paddingTop: 20,
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {notifications.map((notification) => (
            <View
              key={notification.id}
              style={{
                width: "90%",
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: "#fff",
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                alignItems: "flex-start",
                marginBottom: 20, // Khoảng cách giữa các thông báo
              }}
            >
              <Text style={{ fontSize: 18, fontFamily: "Poppins-Bold" }}>
                {notification.title}
              </Text>
              <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular" }}>
                {notification.message}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
