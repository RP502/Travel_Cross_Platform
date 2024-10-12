import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScheduleLocatinItem, {
  ScheduleLocatinItemProps,
} from "./ScheduleLocationItem";

const loremList: ScheduleLocatinItemProps[] = [
  {
    location: "Central Park",
    time: "10:00 AM",
    imageUrl: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
  },
  {
    location: "Statue of Liberty",
    time: "12:00 PM",
    imageUrl: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
  },
  {
    location: "Times Square",
    time: "2:00 PM",
    imageUrl: "https://phongnhacavestour.com/wp-content/uploads/2016/10/3.jpg",
  },
  {
    location: "Brooklyn Bridge",
    time: "4:00 PM",
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
