import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import EvaluationItem from "./EvaluationItem";
import { Colors } from "@/constants/Colors";

const EvaluationListData = [
  {
    id: 1,
    userName: "John Doe",
    date: "12/12/2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
    evaluate: 3,
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
  },
  {
    id: 2,
    userName: "John Doe",
    date: "12/12/2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
    evaluate: 4,
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
  },
  {
    id: 3,
    userName: "John Doe",
    date: "12/12/2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
    evaluate: 5,
    image: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
  },
];

const EvaluationList = () => {
  return (
    <View>
      <FlatList
        data={EvaluationListData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EvaluationItem {...item} />}
      />

      <TouchableOpacity
        style={{
          backgroundColor: Colors.light.primary_01,
          paddingVertical: 5,
          borderRadius: 10,
          width: 200,
          alignSelf: "center",
          marginTop: 10,
          shadowColor: "#000", // Shadow color for iOS
          shadowOffset: { width: 1, height: 2 }, // Shadow offset for iOS
          shadowOpacity: 0.8, // Shadow opacity for iOS
          shadowRadius: 3, // Shadow radius for iOS
          elevation: 5, // Elevation for Android
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: Colors.light.white,
            fontFamily: "Poppins-Regular",
            textAlign: "center",
          }}
        >
          Đọc tất cả đánh giá
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EvaluationList;

const styles = StyleSheet.create({});
