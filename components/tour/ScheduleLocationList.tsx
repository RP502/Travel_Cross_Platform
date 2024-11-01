import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScheduleLocatinItem, {
  ScheduleLocatinItemProps,
} from "./ScheduleLocationItem";

const loremList: ScheduleLocatinItemProps[] = [
  {
    location: "Đến khu vực Phong Nha - Kẻ Bàng",
    time: "09:00",
    imageUrl: "https://res.cloudinary.com/dcp33adrf/image/upload/v1730276025/travel-app/tours/phong%20nha/vuon-quoc-gia-phong-nha-ke-bang_td0flb.jpg",
  },
  {
    location: " Tham quan Động Phong Nha",
    time: "09:30",
    imageUrl: "https://res.cloudinary.com/dcp33adrf/image/upload/v1730102980/travel-app/tours/phong%20nha/pn2_iiijyg.jpg",
  },
  {
    location: "Nghỉ trưa và ăn trưa",
    time: "12:00",
    imageUrl: "https://res.cloudinary.com/dcp33adrf/image/upload/v1730276141/travel-app/tours/phong%20nha/download_to6zrx.jpg",
  },
  {
    location: "Tham quan Động Thiên Đường",
    time: "13:30",
    imageUrl: "https://res.cloudinary.com/dcp33adrf/image/upload/v1730276157/travel-app/tours/phong%20nha/download_qtovus.jpg",
  },
  {
    location: "Thưởng thức các món đặc sản",
    time: "15:30",
    imageUrl: "https://res.cloudinary.com/dcp33adrf/image/upload/v1730276128/travel-app/tours/phong%20nha/download_yjvswq.jpg",
  },
  {
    location: "Khởi hành về Đồng Hới",
    time: "16:00",
  },
  {
    location: "Đến ga Đồng Hới, kết thúc tour",
    time: "17:00",
  },
];

const ScheduleLocationList = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={loremList}
        renderItem={({ item }) => <ScheduleLocatinItem {...item} />}
        keyExtractor={(item) => item.location}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

export default ScheduleLocationList;

const styles = StyleSheet.create({});
