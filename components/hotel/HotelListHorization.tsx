import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HotelCard from "./HotelCard";
import { Hotel } from "@/redux/hotels/hotelType";

interface HotelListProps {
  hotelList: Hotel[];
}

const HotelListHorization: React.FC<HotelListProps> = ({ hotelList }) => {
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
        data={hotelList}
        renderItem={({ item }) => <HotelCard hotel={item} />}
        keyExtractor={(item) => item.hotelId}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};

export default HotelListHorization;

const styles = StyleSheet.create({});
