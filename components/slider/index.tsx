import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { SliderPorps } from "@/constants/Sider";
import SliderItem from "./SliderItem";
import { Colors } from "@/constants/Colors";
import { Slider } from "@/redux/sliders/sliderType";

interface SlideListPorps {
  isFullScreen?: boolean;
  dataList: Slider[];
}

const SlideList: React.FC<SlideListPorps> = ({ dataList }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  let { width } = Dimensions.get("window");
  width = width - 32;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === dataList.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleScroll = (event: any) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={[styles.container, { marginVertical:  10 }]}>
      <FlatList
        data={dataList}
        renderItem={({ item }) => (
          <SliderItem {...item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={handleScroll}
      />
      <View
        style={[
          styles.indexContainer,
          {
            left: 10,
          },

        ]}
      >
        <FlatList
          data={dataList}
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
  },
  indexContainer: {
    position: "absolute",
    color: Colors.light.white,
  },
});
