import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/redux/counter/counterSlice";

const NotificationScreen = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleSubtract = () => {
    dispatch(decrement());
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{count}</Text>
      <Button title="Add" onPress={handleAdd} />
      <Button title="Subtract" onPress={handleSubtract} />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
