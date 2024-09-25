import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { SliderList } from "@/constants/Sider";
import SliderItem from "./SliderItem";
import { Colors } from "@/constants/Colors";

const SlideList: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  let { width } = Dimensions.get("window");
  width = width - 32;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === SliderList.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleScroll = (event: any) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={SliderList}
        renderItem={({ item }) => <SliderItem {...item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={handleScroll}
      />
      <View style={styles.indexContainer}>
        <FlatList
          data={SliderList}
          renderItem={({ item, index }) => (
            <Entypo
              name="dot-single"
              size={15}
              color={
                index === currentIndex
                  ? Colors.light.white
                  : Colors.light.neutral_04
              }
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
      </View>
    </View>
  );
};

export default SlideList;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.white,
    borderRadius: 15,
    marginVertical: 10,
  },
  indexContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: Colors.light.white,
  },
});
