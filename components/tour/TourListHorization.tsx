import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import TourCard from "./TourCard";
import { Tour } from "@/redux/tours/tourType";

interface TourListProps {
  tourList: Tour[];
}

const TourListHorization: React.FC<TourListProps> = ({ tourList }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  let { width } = Dimensions.get("window");
  width = Math.floor((width - 45) / 2);
  const handleScroll = (event: any) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };
  return (
    <View style={{ paddingLeft: 11 }}>
      <FlatList
        data={tourList}
        renderItem={({ item }) => <TourCard tour={item} />}
        keyExtractor={(item) => item.tourId}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};

export default TourListHorization;

const styles = StyleSheet.create({});
