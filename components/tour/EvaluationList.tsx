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
    userName: "Hoàng Hà",
    date: "23/12/2023",
    content:
      "Chuyến đi rất tuyệt vời! Cảnh quan thiên nhiên đẹp không thể tả, hướng dẫn viên thân thiện và nhiệt tình. Mình rất hài lòng với dịch vụ!",
    evaluate: 5,
    image:
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730277180/travel-app/tours/phong%20nha/download_y5takw.jpg",
  },
  {
    id: 2,
    userName: "Lê Ngọc Ánh",
    date: "01/05/2024",
    content:
      "Một ngày trải nghiệm đầy thú vị và đáng nhớ! Các điểm đến được sắp xếp hợp lý, bữa trưa ngon miệng và phong cảnh tuyệt đẹp. Sẽ giới thiệu cho bạn bè!",
    evaluate: 4,
    image:
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730277159/travel-app/tours/phong%20nha/download_gbqqbq.jpg",
  },
  {
    id: 5,
    userName: "Vũ Hưng",
    date: "09/08/2024",
    content:
      "Tour rất chuyên nghiệp, động Phong Nha và Thiên Đường đẹp đến ngỡ ngàng. Xe đưa đón đúng giờ, hướng dẫn viên nhiệt tình và vui vẻ. Rất đáng giá!",
    evaluate: 5,
    image:
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730277214/travel-app/tours/phong%20nha/download_nngatp.jpg",
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
